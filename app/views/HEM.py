from flask import Flask, render_template, url_for, request, jsonify, make_response
from cStringIO import StringIO
import csv
import numpy as np
import random
import time

from pyteomics import mzml

from app.lib.HEM.hem_result import hem_result
from app.lib.wildcard_result import wildcard_result
from app.lib.wildcard_result_singlecall import wildcard_result_singlecall


from app import app

@app.route('/getform', methods=['POST'])
def getform():
    print 'getting form'
    print request.form['tolType']
    result = hem_result(request)


    print result
    return jsonify(response=result)

@app.route('/hem')
def hem():
    return render_template('hem.html')