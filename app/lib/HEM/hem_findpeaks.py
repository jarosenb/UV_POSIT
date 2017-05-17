import numpy as np

from scipy.optimize import nnls

from compute_averagine_composition import compute_averagine_composition
#from isotope_function import isotopefn
from isotope_calculator import isotopefn
from app.lib.Sequence import Sequence

from app.lib.np_search import np_search

from app.lib.ion_masses import ion_masses

# interesting masses: 946.96523243(alact), 1423.7(insulin), 1200.0854(insulin), 1842 (enfuv), 1635.8033(insul), 1148(ins)


def find_aion(sequence, n, charge, peaks):

    aion_mass = ion_masses(sequence, ['a'])['a'][n-1]
    #print 'aion mass: '
    #print aion_mass

    # compute normalized averagine distribution
    theoretical_dist = isotopefn(sequence.stripped_seq, n)
    #print theoretical_dist
    theoretical_dist = theoretical_dist / np.max(theoretical_dist)


    # Determine masses to search which should be present at >10% base peak intensity

    isotope_masses = np.arange(theoretical_dist.size) * 1.003355 + aion_mass

    isotopes_to_search = np.where(theoretical_dist > 0.1)[0]
    num_isotopes = isotopes_to_search.size

    expected_isotopes = theoretical_dist[isotopes_to_search]
    expected_masses = isotope_masses[isotopes_to_search]

    #print 'expected isotopes:'
    #print expected_isotopes
    search_mzs = np.zeros((4, num_isotopes + 3))

    search_mzs[0, 0:num_isotopes] = (expected_masses - 1.008 + 1.008 * charge) / charge  # a - 1
    search_mzs[1, 1:num_isotopes + 1] = (expected_masses + 1.008 * charge) / charge  # a
    search_mzs[2, 2:num_isotopes + 2] = (expected_masses + 1.008 + 1.008 * charge) / charge  # a + 1
    search_mzs[3, 3:num_isotopes + 3] = (expected_masses + 2 * 1.008 + 1.008 * charge) / charge  # a + 2

    #print search_mzs
    search_positions = np_search(peaks[:,0], search_mzs)
    search_intensities = peaks[:,1][search_positions]
    search_intensities[search_positions == -1] = 0

    #print "search result: "
    #print search_intensities

    fitting_ints = np.apply_along_axis(lambda x: np.sum(np.unique(x)), 0, search_intensities)
    if np.max(fitting_ints != 0):
        fitting_ints = fitting_ints / np.max(fitting_ints)
    else:
        # no peaks found
        return False

    #print fitting_ints

    theoretical_intensities = np.zeros((4, num_isotopes + 3))
    theoretical_intensities[0, 0:num_isotopes] = expected_isotopes
    theoretical_intensities[1, 1:num_isotopes + 1] = expected_isotopes
    theoretical_intensities[2, 2:num_isotopes + 2] = expected_isotopes
    theoretical_intensities[3, 3:num_isotopes + 3] = expected_isotopes

    # print theoretical_intensities.T
    # print 'np fit: '

    #print np.linalg.lstsq(theoretical_intensities.T, fitting_ints)


    # print 'nnls fit: '
    nnls_fit = nnls(theoretical_intensities.T, fitting_ints)
    if nnls_fit[0][1] == 0 and nnls_fit[0][2] == 0:
        return False
    # print nnls_fit

    fitted_dist = np.dot(theoretical_intensities.T, nnls_fit[0])
    # print fitted_dist

    # print fitting_ints

    # print 'HEM:'
    hemval = nnls_fit[0][1] / (nnls_fit[0][1] + nnls_fit[0][2])
    score = np.sum((fitted_dist - fitting_ints) ** 2) / np.sum(fitted_dist ** 2)

    output = {
        'pos': n,
        'charge': charge,
        'res': sequence.stripped_seq[n-1],
        'hem': hemval,
        'score': score,
        'peaksExp': fitting_ints.tolist(),
        'peaksTheo': fitted_dist.tolist(),
        'masses': np.max(search_mzs, axis=0).tolist(),
        'warn': 'none'
    }

    return output














