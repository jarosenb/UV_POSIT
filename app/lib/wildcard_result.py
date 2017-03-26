from ion_masses import ion_masses
from Sequence import Sequence
from np_search import np_search
from cStringIO import StringIO
import numpy as np

import time


def wildcard_result(self, state):

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

    mods_to_search = np.arange(num_searches) * increment + firstMass

    print num_searches

    result_array = np.zeros((num_searches, 4 + len(selected_iontypes)))

    def searchArray(modmass=0):

        ion_array = all_ions_array + modmass

        ion_hits = np_search(xtract_array[:, 0], ion_array, tol, tol_type)

        ion_counts = np.sum(ion_hits >= 0, axis=1)

        ion_ints = xtract_array[:, 1][ion_hits]
        ion_ints[ion_hits < 0] = 0

        result_array = np.zeros(4 + len(selected_iontypes))
        result_array[0] += modmass

        for i, a in enumerate(selected_iontypes):
            if a[0] in ['a', 'b', 'c']:
                result_array[1] += ion_counts[i]
                result_array[2] += ion_counts[i]
                result_array[i + 4] += ion_counts[i]
            elif a[0] in ['x', 'y', 'z']:
                result_array[1] += ion_counts[i]
                result_array[3] += ion_counts[i]
                result_array[i + 4] += ion_counts[i]

        return result_array

    iontype_names = map(iontype_mapfn, selected_iontypes)
    titles = (['Mass Shift', 'All ions', 'N-terminal', 'C-terminal'] + iontype_names)

    result['titles'] = titles

    for i, m in enumerate(mods_to_search):
        result_array[i] += searchArray(m)
        self.update_state(state='PROGRESS',
                          meta={'current': i, 'total': num_searches,
                                'status': "processing..."})


    print time.time() - t1

    return {'current': 100, 'total': 100, 'status': 'Task completed!',
            'result': result_array.tolist() }




