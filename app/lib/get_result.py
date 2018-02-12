from ion_masses import ion_masses
from Sequence import Sequence
from np_search import np_search
from cStringIO import StringIO
import numpy as np

def get_result(state):

    result = {}

    xtract_data = StringIO(state['masslist'])
    xtract_array = np.genfromtxt(xtract_data, delimiter='\t')

    ion_types = ['a', 'ap', 'b', 'c', 'x', 'xp', 'y', 'ym', 'ymm', 'z']
    def iontype_mapfn(i):
        return i.replace('p', '+').replace('m', '-')


    selected_iontypes = [ion for ion in ion_types if state['ions'][ion]]

    seq_object = Sequence(state['sequence'])



    remove_mode = state['removeDuplicates']
    print remove_mode

    tol = float(state['tolValue'])
    tic = float(state['tic'])
    tol_type = state['tolType']

    all_ions = ion_masses(seq_object, selected_iontypes)

    def searchArray(modmass=0):

        ion_array = np.array([all_ions[k] for k in selected_iontypes]) + modmass


        ion_hits = np_search(xtract_array[:, 0], ion_array, tol, tol_type)

        hit_positions = ion_hits[ion_hits >= 0]

        ion_ints = xtract_array[:, 1][ion_hits]
        ion_ints[ion_hits < 0] = 0

        result_array = np.zeros((3 + len(selected_iontypes), len(seq_object.stripped_seq)))

        for i, a in enumerate(selected_iontypes):
            if a[0] in ['a', 'b', 'c']:
                result_array[0][0:-1] += ion_ints[i]
                result_array[1][0:-1] += ion_ints[i]
                result_array[i + 3][0:-1] += ion_ints[i]
            elif a[0] in ['x', 'y', 'z']:
                result_array[0][1:] += ion_ints[i][::-1]
                result_array[2][1:] += ion_ints[i][::-1]
                result_array[i + 3][1:] += ion_ints[i][::-1]

        result_array = result_array / tic


        # titles = [[k] for k in titles]
        # result_array = np.hstack((titles, result_array))
        seq_list = [n for n in seq_object.raw_seq]

        return result_array.tolist(), hit_positions

    iontype_names = map(iontype_mapfn, selected_iontypes)
    titles = (['a.a.', 'Position','All ions', 'N-terminal', 'C-terminal'] + iontype_names)
    result_apo = searchArray()
    result['apo'] = result_apo[0]
    if remove_mode:
        xtract_array = np.delete(xtract_array, result_apo[1], axis=0)

    result['titles'] = titles
    result['labels'] = [i + 1 for i in range(len(seq_object.stripped_seq))] # [n for n in seq_object.stripped_seq]
    result['sequence'] = [n for n in seq_object.stripped_seq]
    result['search_successful'] = True
    for mod in state['mods']:
        result_mod = searchArray(float(mod))
        result[mod] = result_mod[0]
        if remove_mode:
            xtract_array = np.delete(xtract_array, result_mod[1], axis=0)

    #  print result

    return result
