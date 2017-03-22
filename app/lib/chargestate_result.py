import numpy as np
from app.lib.Sequence import Sequence
from app.lib.ion_masses import ion_masses
from app.lib.np_search import np_search
from cStringIO import StringIO

def chargestate_result(data):
    print data
    xtract_data = StringIO(data['masslist'])
    xtract_array = np.genfromtxt(xtract_data, delimiter='\t')
    xtract_array = xtract_array[xtract_array[:,2].argsort()]



    charges = np.round(xtract_array[:,2] / xtract_array[:,0])
    print np.shape(xtract_array[charges==2])

    maxcharge = np.max(charges)

    ion_types = ['a', 'ap', 'b', 'c', 'x', 'xp', 'y', 'ym', 'ymm', 'z']

    def iontype_mapfn(i):
        return i.replace('p', '+').replace('m', '-')

    #  iontype_map = {'ap': 'a+', 'xp': 'x+', 'ym': 'y-', 'ymm': 'y--'}

    selected_iontypes = [ion for ion in ion_types if data['ions'][ion]]

    seq_object = Sequence(data['sequence'])
    # print seq_object.mods()

    tol = float(data['tolValue'])
    tol_type = data['tolType']

    result_array_nterm = np.zeros((len(seq_object.stripped_seq) - 1, int(maxcharge)))
    result_array_cterm = np.zeros((len(seq_object.stripped_seq) - 1, int(maxcharge)))
    all_ions = ion_masses(seq_object, selected_iontypes)


    for iontype in selected_iontypes:
        for i in range(1, int(maxcharge) + 1):
            search_result = np_search(xtract_array[charges == i][:, 2], all_ions[iontype], tol, tol_type)
            search_ints = xtract_array[:, 4][search_result]
            search_ints[search_result < 0] = 0

            if iontype[0] in ['a', 'b', 'c']:
                result_array_nterm[:,i-1] += search_ints

            if iontype[0] in ['x', 'y', 'z']:
                result_array_cterm[:,i-1] += search_ints

    ion_labels = [str(i) + '+' for i in range(1, int(maxcharge) + 1)]
    print ion_labels

    print result_array_nterm.T.tolist()[1]

    ion_array = np.array([all_ions[k] for k in selected_iontypes])

    ion_hits = np_search(xtract_array[:, 2], ion_array, tol, tol_type)




    return 'hi'