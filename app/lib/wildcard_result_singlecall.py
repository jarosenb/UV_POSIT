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

    nterm_indices = []
    cterm_indices = []

    for i, n in enumerate(selected_iontypes):
        if n[0] in ['a', 'b', 'c']:
            nterm_indices.append(i)
        else:
            cterm_indices.append(i)

    print nterm_indices
    print cterm_indices

    firstMass = float(state['firstMass'])
    lastMass = float(state['lastMass'])
    increment = float(state['increment'])

    num_searches = int((lastMass - firstMass) / increment) + 1

    num_chunks = num_searches / 1000 + 1

    print num_chunks

    # convert mods to column vector
    mods_to_search = (np.arange(num_searches) * increment + firstMass)

    mods_to_search_3d = mods_to_search[np.newaxis, np.newaxis].T

    mods_to_search_chunked = np.array_split(mods_to_search_3d, num_chunks)
    # add mods to the generated ion masses

    chunk_results = []
    current_chunk = 0

    for mass_chunk in mods_to_search_chunked:
        chunk_size = mass_chunk.shape[0]
        chunk_searchspace = np.tile(all_ions_array, (chunk_size, 1, 1)) + mass_chunk

        chunk_hits = np_search(xtract_array[:, 0], chunk_searchspace, tol, tol_type)

        chunk_sums = np.sum(chunk_hits >= 0, axis=2)

        cumulative_sums = np.zeros((chunk_size, 3))

        cumulative_sums[:,0] = np.sum(chunk_sums, axis=1)
        cumulative_sums[:,1] = np.sum(chunk_sums[:, nterm_indices], axis=1)
        cumulative_sums[:,2] = np.sum(chunk_sums[:, cterm_indices], axis=1)

        chunk_sums = np.hstack((cumulative_sums, chunk_sums))

        chunk_results.append(chunk_sums)

        current_chunk += 1

        self.update_state(state='PROGRESS',
                          meta={'current': current_chunk, 'total': num_chunks,
                                'status': "processing chunk {} of {}".format(current_chunk, num_chunks)})



    final_result = np.hstack((mods_to_search[np.newaxis].T, np.concatenate(chunk_results)))

    print time.time() - t1

    iontype_names = map(iontype_mapfn, selected_iontypes)
    titles = ['Mass Shift (Da)', 'All ions', 'N-terminal', 'C-terminal'] + iontype_names

    return {'current': 100, 'total': 100, 'status': 'Task completed!',
            'result': [titles] + final_result.tolist()}




