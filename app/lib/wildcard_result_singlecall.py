from ion_masses import ion_masses
from Sequence import Sequence
from np_search import np_search
from cStringIO import StringIO
import numpy as np

import time


def wildcard_result_singlecall(self, state):

    t1 = time.time()

    result = {}

    xtract_data = StringIO(state['masslist'])
    xtract_array = np.genfromtxt(xtract_data, delimiter='\t')

    ion_types = ['a', 'ap', 'b', 'c', 'x', 'xp', 'y', 'ym', 'ymm', 'z']

    def iontype_mapfn(i):
        return i.replace('p', '+').replace('m', '-')

    selected_iontypes = [ion for ion in ion_types if state['ions'][ion]]

    seq_object = Sequence(state['sequence'])

    tol = float(state['tolValue'])
    tol_type = state['tolType']

    all_ions = ion_masses(seq_object, selected_iontypes)
    all_ions_array = np.array([all_ions[k] for k in selected_iontypes])

    firstMass = float(state['firstMass'])
    lastMass = float(state['lastMass'])
    increment = float(state['increment'])

    num_searches = int((lastMass - firstMass) / increment) + 1
    # convert mods to column vector
    mods_to_search = (np.arange(num_searches) * increment + firstMass)[np.newaxis, np.newaxis].T

    # add mods to the generated ion masses
    ions_with_mods = np.tile(all_ions_array, (num_searches, 1, 1)) + mods_to_search

    ions_with_mods_chunked = np.array_split(ions_with_mods, 100)

    chunk_results = []

    for i, chunk in enumerate(ions_with_mods_chunked):

        chunk_hits = np_search(xtract_array[:, 0], chunk, tol, tol_type)
        chunk_sums = np.sum(chunk_hits >= 0, axis=2)

        chunk_results.append(chunk_sums)

        self.update_state(state='PROGRESS',
                          meta={'current': i, 'total': 10,
                                'status': "processing chunk {} of 100".format(i)})

    final_result = np.concatenate(chunk_results)

    print time.time() - t1

    return {'current': 10, 'total': 10, 'status': 'Task completed!',
            'result': final_result.tolist()}




