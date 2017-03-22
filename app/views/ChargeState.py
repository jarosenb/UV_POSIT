from flask import Flask, render_template, url_for, request, jsonify
from app.lib.Sequence import Sequence
from app.lib.get_result import get_result
from app.lib.format_data import format_data
from app.lib.chargestate_result import chargestate_result
from cStringIO import StringIO
import numpy as np

from app import app

@app.route('/chargesearch', methods=['POST'])
def chargeSearch():
    data = request.json

    return jsonify(result=chargestate_result(data))


@app.route('/validateChargeData', methods=['POST'])
def validateChargeData():

    validated = True

    data = request.json
    xtract_data = StringIO(data['masslist'])


    xtract_array = np.genfromtxt(xtract_data, delimiter='\t')

    return jsonify(result=True)



@app.route('/chargestate')
def chargestate():
    return render_template('chargestate.html')
