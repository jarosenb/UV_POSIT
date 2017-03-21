from flask import Flask, render_template, url_for, request, jsonify
from lib.Sequence import Sequence
from lib.get_result import get_result
from lib.format_data import format_data
from cStringIO import StringIO
import numpy as np


app = Flask(__name__)

app.secret_key = 'SECRET'

@app.route('/updateTable', methods=['POST'])
def updateTable():
    data = request.json

    if data['searchResult']:
        return jsonify(result=format_data(data))
    else:
        return jsonify(result={'HOTdata': data['mydata'], 'C3data': {'columns': [[]]}})


@app.route('/runSearch', methods=['POST'])
def runSearch():
    data = request.json
    result = get_result(data)
    return jsonify(result=result)

@app.route('/validateSequence', methods=['POST'])
def validateSequence():
    seqString = request.json

    validated = Sequence(seqString).validate()

    print validated
    return jsonify(result=validated)

@app.route('/validateData', methods=['POST'])
def validateData():

    validated = True

    data = request.json
    xtract_data = StringIO(data['masslist'])

    try:
        xtract_array = np.genfromtxt(xtract_data, delimiter='\t')
    except ValueError:
        return jsonify(result=False)

    if xtract_array.ndim != 2:
        validated = False

    print data['tic']
    try:
        float(data['tolValue'])
        if data['tic'] != '':
            float(data['tic'])
        for mod in data['mods']:
            float(mod)
    except ValueError:
        return jsonify(result=False)

    return jsonify(result=validated)


@app.route('/post', methods = ['POST'])
def post():
    # Get the parsed contents of the form data
    json = request.json
    tv = json['ions']['xp']
    # Render template
    return jsonify(result=(not tv))


@app.route("/")
def default_view():
    return render_template('index.html')

