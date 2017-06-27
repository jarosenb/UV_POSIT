'''
%
% Calculates isotopic distributions including isotopic fine structure
% of molecules using FFT and various scaling 'tricks'. Easily adopted
% to molecules of any elemental composition (by altering MAX_ELEMENTS
% and the nuclide matrix A). To simulate spectra, convolute with peak
% shape using FFT.
%
% (C) 1999 by Magnus Palmblad, Division of Ion Physics, Uppsala Univ.
% Acknowledgements:
% Lars Larsson-Cohn, Dept. of Mathematical Statistics, Uppsala Univ.,
% for help on theory of convolutions and FFT.
% Jan Axelsson, Div. of Ion Physics, Uppsala Univ. for comments and ideas
%
% Contact Magnus Palmblad at magnus.palmblad@gmail.com if you should
% have any questions or comments.
%

Converted to Python 1/10/08 by
Brian H. Clowers bhclowers@gmail.com
'''
import numpy as np
import numpy.fft.fftpack as F
from pyteomics import mass
import re



def isotopefn(masscomp):

    def next2pow(x):
        return 2 ** int(np.ceil(np.log(float(x)) / np.log(2.0)))

    MAX_ELEMENTS = len(masscomp.keys()) + 1  # add 1 due to mass correction 'element'
    MAX_ISOTOPES = 4  # maxiumum # of isotopes for one element
    CUTOFF = 1e-8  # relative intensity cutoff for plotting

    A = np.zeros((MAX_ELEMENTS, MAX_ISOTOPES, 2))
    M_list = [] # number of instances of each element
    mmi_0 = [] # monoisotopic mass in new units
    mass_removed_0 = []

    for i, key in enumerate(masscomp):

        M_list.append(masscomp[key])
        s_dict = mass.nist_mass[key]

        basemass_float = np.min([k[0] for k in s_dict.values() if k[1] != 0])
        basemass = int(np.round(basemass_float)) - 1

        mass_removed_0.append(basemass)

        j_index = 0
        for k in s_dict.keys()[1:]:

            if s_dict[k][1] != 0 and j_index < (MAX_ISOTOPES - 1):
                mass_newunits = int(np.round((s_dict[k][0] - basemass) * 100000))
                abundance = s_dict[k][1]
                A[i][j_index, :] = [mass_newunits, abundance]

                if j_index == 0:
                    mmi_0.append(mass_newunits)

                j_index += 1

    mmi_0.append(-1)

    WINDOW_SIZE = 500
    # WINDOW_SIZE=input('Window size (in Da) ---> ');

    # RESOLUTION=input('Resolution (in Da) ----> ');  % mass unit used in vectors
    RESOLUTION = 0.5
    if RESOLUTION < 0.00001:  # % minimal mass step allowed
        RESOLUTION = 0.00001
    elif RESOLUTION > 0.5:  # maximal mass step allowed
        RESOLUTION = 0.5

    R = 0.00001 / RESOLUTION  # % R is used to scale nuclide masses (see below)

    WINDOW_SIZE = WINDOW_SIZE / RESOLUTION;  # convert window size to new mass units
    WINDOW_SIZE = next2pow(WINDOW_SIZE);  # fast radix-2 fast-Fourier transform algorithm

    if WINDOW_SIZE < np.round(496708 * R) + 1:
        WINDOW_SIZE = next2pow(np.round(496708 * R) + 1)  # just to make sure window is big enough

    # print 'Vector size: 1x%d'%WINDOW_SIZE

    # H378 C254 N65 O75 S6
    M = np.array(M_list + [-1])

    # isotopic abundances stored in matrix A (one row for each element)

    A[MAX_ELEMENTS - 1][0, :] = [100000, 1.00000]  # % for shifting mass so that Mmi is
    #                                             % near left limit of window

    #Mmi = np.array([np.round(100783 * R), np.round(100000 * R), \
    #                np.round(100307 * R), np.round(99492 * R), np.round(97207 * R),
    #                0]) * M  # % (Virtual) monoisotopic mass in new units

    Mmi = np.array([np.round(x * R) for x in mmi_0])

    Mmi = Mmi.sum()
    # % mass shift so Mmi is in left limit of window:
    # print "Mmi",Mmi
    # print "Window", WINDOW_SIZE
    FOLDED = np.floor(Mmi / (WINDOW_SIZE - 1)) + 1  # % folded FOLDED times (always one folding due to shift below)

    # % shift distribution to 1 Da from lower window limit:
    M[MAX_ELEMENTS - 1] = np.ceil(
        ((WINDOW_SIZE - 1) - np.mod(Mmi, WINDOW_SIZE - 1) + np.round(100000 * R)) * RESOLUTION)
    MASS_REMOVED = np.array(mass_removed_0 + [-1]) * M  # ';  % correction for 'virtual' elements and mass shift
    MASS_REMOVED = MASS_REMOVED.sum()

    ptA = np.ones(WINDOW_SIZE);
    t_fft = 0
    t_mult = 0

    for i in xrange(MAX_ELEMENTS):

        tA = np.zeros(WINDOW_SIZE)
        for j in xrange(MAX_ISOTOPES):
            if A[i][j, 0] != 0:
                # removed +1 after R)+1 --we're using python
                tA[np.int(np.round(A[i][j, 0] * R))] = A[i][j, 1]  # ;  % put isotopic distribution in tA

        # print 'Calculate FFT...'

        tA = F.fft(tA)  # FFT along elements isotopic distribution  O(nlogn)

        # print 'Multiply vectors...'

        tA = tA ** M[i]  # % O(n)
        #################
        ptA = ptA * tA  # % O(n)#this is where it is messing UP
        #################

    # rint 'Time for FFT: %4.2f s'%t_fft
    # print 'Time for multiplications: %4.2f s'%t_mult

    # print 'Calculate IFFT...'

    ptA = F.ifft(ptA).real  # ;  % O(nlogn)

    # print 'Time for IFFT: %4.2f s'%(time.clock()-t0)

    # print 'Plotting...'



    start = (FOLDED * (WINDOW_SIZE - 1) + 1) * RESOLUTION + MASS_REMOVED, (FOLDED + 1) * (
    WINDOW_SIZE - 1) * RESOLUTION + MASS_REMOVED
    stop = WINDOW_SIZE - 1

    MA = np.linspace((FOLDED * (WINDOW_SIZE - 1) + 1) * RESOLUTION + MASS_REMOVED,
                     (FOLDED + 1) * (WINDOW_SIZE - 1) * RESOLUTION + MASS_REMOVED, WINDOW_SIZE - 1)

    ind = np.where(ptA > CUTOFF)[0]

    y = ptA[ind]
    y2 = y / np.max(y)
    return y2







