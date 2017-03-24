from flask import Flask, render_template, url_for, request, jsonify
from app.lib.Sequence import Sequence
from app.lib.get_result import get_result
from app.lib.format_data import format_data
from app.lib.chargestate_result import chargestate_result
from cStringIO import StringIO
import numpy as np

from app import app


@app.route('/wildcard')
def wildcard():
    return render_template('wildcard.html')