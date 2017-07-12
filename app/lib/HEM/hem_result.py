from pyteomics import mzml
import numpy as np
from centroid_peaks import centroid_peaks
from scipy.signal import argrelmax

from hem_findpeaks import find_aion

from app.lib.SequenceHEM import SequenceHEM
from compute_averagine_composition import compute_averagine_composition

def hem_result(request):

    tolValue = float(request.form['tolValue'])
    tolType = request.form['tolType']

    input_sequence = request.form['sequence']
    min_signal = float(request.form['signal'])

    reader = mzml.read(request.files['ip'])

    spectrum = reader.next()

    import time


    relmax_positions = argrelmax(spectrum['intensity array'])



    peaks = np.vstack((spectrum['m/z array'], spectrum['intensity array'])).T

    peaks_relmax = peaks[relmax_positions]

    # print peaks_relmax[:,1] > 0

    peaks_relmax_filtered = peaks_relmax[peaks_relmax[:,1] >= min_signal]


    #print peaks_relmax

    # print np.shape(peaks_relmax)
    #print np.shape(peaks_relmax_filtered)

    sequence = SequenceHEM(input_sequence)

    # print sequence.aion_composition(3)

    charge = int(request.form['charge'])
    cutoff = float(request.form['score'])

    #print find_aion(sequence, 10, 3, peaks_relmax_filtered)

    result = [{
                    'pos': 'Position',
                    'charge': 'Charge',
                    'res': 'Residue',
                    'hem': 'HEM value',
                    'score': 'Score',
                    'peaksExp': [1, 15, 20, 15, 1],
                    'peaksTheo': [0.9, 18, 21, 14.5, 1.1],
                    'masses': [101.1, 101.2, 101.3, 101.4, 101.5],
                    'hem_hb': 'HB value',
                    'hem_nhb': 'Non-HB value',
                    'score': 'Score',
                    'warn': 'Warnings'

                }]

    for n in range(1, len(sequence.stripped_seq)):
        for c in range(1, charge + 1):

            r = find_aion(sequence, n, c, peaks_relmax_filtered, cutoff, tolValue, tolType)
            if r:
                result.append(r)

    return result
