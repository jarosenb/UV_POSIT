import numpy as np
from app.lib.Sequence import Sequence
from app.lib.ion_masses import ion_masses
from app.lib.np_search import np_search
from cStringIO import StringIO

def chargestate_result(data):

    xtract_data = StringIO(data['masslist'])
    xtract_array = np.genfromtxt(xtract_data, delimiter='\t')
    xtract_array = xtract_array[xtract_array[:,2].argsort()]



    charges = np.round(xtract_array[:,2] / xtract_array[:,0])

    # print np.where(xtract_array[:,4] == 58.57467)[0]
    # print charges[75]
    # print xtract_array[75,:]

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

    result_array_nterm = np.zeros((len(seq_object.stripped_seq), int(maxcharge)))
    result_array_cterm = np.zeros((len(seq_object.stripped_seq), int(maxcharge)))
    all_ions = ion_masses(seq_object, selected_iontypes)

    #print all_ions['x']


    for iontype in selected_iontypes:
        for i in range(1, int(maxcharge) + 1):
            search_result = np_search(xtract_array[charges == i][:, 2], all_ions[iontype], tol, tol_type)
            search_ints = xtract_array[charges==i][:, 4][search_result]
            search_ints[search_result < 0] = 0

            if iontype[0] in ['a', 'b', 'c']:

                search_ints = np.append(search_ints, np.array([0]))
                # print len(search_ints)
                result_array_nterm[:,i-1] += search_ints

                if i == 2:
                    print xtract_array[charges==i][:,5]
                    print result_array_nterm[:,i-1]

            if iontype[0] in ['x', 'y', 'z']:
                search_ints = np.append(np.array([0]), search_ints)
                #print search_ints
                result_array_cterm[:,i-1] += search_ints[::-1]
    
    charge_labels = [str(i) + '+' for i in range(1, int(maxcharge) + 1)]

    #print result_array_nterm[:,1]

    result_array_nterm_list = result_array_nterm.T.tolist()
    result_array_cterm_list = result_array_cterm.T.tolist()

    # print 'res'
    # print result_array_nterm.tolist()

    result_array_nterm_list_hot =  np.hstack(([[k] for k in seq_object.stripped_seq], [[k] for k in range(1, len(seq_object.stripped_seq) + 1)] ,result_array_nterm))

    result_array_cterm_list_hot =  np.hstack(([[k] for k in seq_object.stripped_seq], [[k] for k in range(1, len(seq_object.stripped_seq) + 1)] ,result_array_cterm))


    # print result_array_nterm_list_hot




    result_array_nterm_list_hot = [['a.a.'] + ['position'] + charge_labels] + result_array_nterm_list_hot.tolist()
    result_array_cterm_list_hot = [['a.a.'] + ['position'] + charge_labels] + result_array_cterm_list_hot.tolist()

    highchartsObject_nterm = []
    highchartsObject_cterm = []

    for n, c in enumerate(charge_labels):
        highchartsObject_nterm.append({'name': c, 'data': result_array_nterm_list[n]})

    for n, c in enumerate(charge_labels):
        highchartsObject_cterm.append({'name': c, 'data': result_array_cterm_list[n]})


    return {'nterm_chart': highchartsObject_nterm, 'cterm_chart': highchartsObject_cterm,
            'nterm_hot': result_array_nterm_list_hot, 'cterm_hot': result_array_cterm_list_hot,
            'search_successful': True, 'sequence': [i + 1 for i in range(len(seq_object.stripped_seq))]}
