"""
This function searches through a mass list l for peaks k with a user-specified ppm cutoff.

Parameters:

    l: 1D numpy array object containing the spectrum (peak list) that we want to search through.

    k: numpy array object of arbitrary dimension, containing the masses we want to search for.

    ppm: ppm cutoff. Masses in k that are not present in l within tolerance will be rejected.

Returns:
    il: numpy array object the same size as k. if il[i] >= 0 then k[i] ~= l[il[i]] within 10 ppm.
        If il[i] < 0 then there is no match for k[i] in l.

"""
import numpy as np


def np_search(l, k, tol=10, tol_type='PPM'):
    ln = np.size(l)
    # Run numpy's built-in binary search to generate indices idx
    idx = np.searchsorted(l, k)

    # process idx so it doesn't contain entries greater than ln-1.
    idx = idx - (idx==ln)*1

    # This step makes sure that indices in idx always point to the CLOSEST match
    # in l for entries in k. Standard behavior of np.searchsorted is to assign k[i]
    # to the first index j in l for which j[l] > k[i]. e.g.:
    #               l = [1000, 2000, 3000] and k=[2001]
    # we will have:
    #               idx = np.searchsorted(l, k) = 2
    #               np.abs(k-l[idx]) = 999
    #               np.abs(k-l[idx-1]) = 1
    #
    # So, idx = idx - 1, correcting the index.
    idx = idx - (np.abs(k-l[idx]) > np.abs(k-l[idx - 1]))*1

    # initialize an array of masses corresponding to indices in idx.
    match_masses = l[idx]


    # array of ppm error values for matches.
    if tol_type == 'PPM':
        err = 1000000 * np.abs(match_masses - k) / match_masses

    if tol_type == 'Da':
        err = np.abs(match_masses - k)

    over_error = (err > tol)

    # Final list of matching indices. Negative indices corespond to no match.
    idx[over_error] = -1

    return idx

# l = np.array([1000, 2000, 3000, 4000, 5000])
# k = np.array([1000.1, 1100, 1500, 4999])
# print np_search(l, k, 10, tol_type='ppm')




