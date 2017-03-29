from flask import Flask, render_template, url_for, request, jsonify, make_response
from cStringIO import StringIO
import csv
import numpy as np
import random
import time

from app.lib.wildcard_result import wildcard_result
from app.lib.wildcard_result_singlecall import wildcard_result_singlecall

from app import app, celery


@celery.task(bind=True)
def long_task(self, data):
    return wildcard_result_singlecall(self, data)


@app.route('/longtask', methods=['POST'])
def longtask():
    task = long_task.delay(request.json)
    return jsonify({'taskID': task.id,
                    'statusURL': url_for('taskstatus', task_id=task.id),
                    'resultURL': url_for('wildcardCSV', task_id=task.id)})

@app.route('/status/<task_id>')
def taskstatus(task_id):
    task = long_task.AsyncResult(task_id)
    if task.state == 'PENDING':
        response = {
            'state': task.state,
            'current': 0,
            'total': 1,
            'status': 'Pending...'
        }
    elif task.state != 'FAILURE':
        response = {
            'state': task.state,
            'current': task.info.get('current', 0),
            'total': task.info.get('total', 1),
            'status': task.info.get('status', '')
        }
        if 'result' in task.info:
            response['result'] = task.info['result']

    else:
        # something went wrong in the background job
        response = {
            'state': task.state,
            'current': 1,
            'total': 1,
            'status': str(task.info),  # this is the exception raised
        }
    return jsonify(response)

@app.route('/validateWildcardData', methods=['POST'])
def validateWildcardData():

    validated = True

    data = request.json
    xtract_data = StringIO(data['masslist'])

    try:
        xtract_array = np.genfromtxt(xtract_data, delimiter='\t')
    except ValueError:
        return jsonify(result=False)

    if xtract_array.ndim != 2:
        validated = False
    try:
        float(data['tolValue'])
        float(data['firstMass'])
        float(data['lastMass'])
        float(data['increment'])
    except ValueError:
        return jsonify(result=False)

    if float(data['firstMass']) > float(data['lastMass']):
        validated = False

    if float(data['increment']) > float(data['lastMass']) - float(data['firstMass']):
        validated = False

    return jsonify(result=validated)


@app.route('/wildcard')
def wildcard():
    return render_template('wildcard.html')

@app.route('/wildcardCSV/<task_id>')
def wildcardCSV(task_id):
    task = long_task.AsyncResult(task_id)
    result = task.info['result']
    mylist = result
    si = StringIO()
    cw = csv.writer(si)
    cw.writerows(mylist)

    response = make_response(si.getvalue())
    response.headers['Content-Disposition'] = 'attachment; filename=mycsv.csv'
    response.mimetype = 'text/csv'

    return response