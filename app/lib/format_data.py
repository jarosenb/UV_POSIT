import numpy as np
def format_data(data):

    sequence = data['searchResult']['sequence']

    sequence_arr = ['a.a.'] + [n for n in sequence]
    position_arr = ['Position'] + range(1, len(sequence) + 1)
    apo_ions = np.array(data['searchResult']['apo'])



    titles = data['searchResult']['titles']
    titles = [[k] for k in titles]

    activeKey = data['activeKey']  # 1 for all ions, 2 for apo, 3 for holo

    if activeKey == 1:

        data_array = apo_ions
        for k in data['selectedMods']:
            data_array += np.array(data['searchResult'][k])


    elif activeKey == 2:
        data_array = apo_ions


    elif activeKey == 3:
        data_array = np.zeros(apo_ions.shape)
        for k in data['selectedMods']:
            data_array += np.array(data['searchResult'][k])



    data_array = np.hstack((titles, data_array))
    data_array_c3 = data_array[0:3,:]

    c3_object = {'categories': [n for n in sequence],
                 'columns': data_array_c3.tolist()}

    data_array_hot = np.vstack((sequence_arr, position_arr, data_array))


    return {'HOTdata': data_array_hot.T.tolist(),
            'C3data': c3_object}