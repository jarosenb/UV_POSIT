import numpy as np
from scipy.optimize import minimize

#obs_dict: {position in primary distribution: observed distribution}
#theo_dict: {position: theoretical distribution}

theo_dist1 = np.array([0.72354076, 1, 0.7264757, 0.36735306, 0.14482781, 0])
real_dist1 = np.array([6350.23974609, 9519.9140625, 8180.15625, 11864.42773438, 1782.52490234, 5849.59326172])

alpha_dist1 = np.array([6350.23974609, 9519.9140625, 8180.15625, 11864.42773438, 1782.52490234, 5849.59326172])
alpha_dist1_theo = np.array([0, 0.72354076, 1, 0.7264757, 0.36735306, 0.14482781])

theo_dist2 = np.array([1, 0.73328851, 0.29513252])
real_dist2 = np.array([11864.42773438, 5849.59326172, 2172.53613281])

#distlist = [np.vstack([real_dist1, theo_dist1]), np.vstack([real_dist2, theo_dist2])]

distlist = [np.vstack([real_dist1, theo_dist1]), np.vstack([real_dist2, theo_dist2]), np.vstack([alpha_dist1, alpha_dist1_theo])]


def fitscore(dists):
    alphas = np.ones(len(dists))

    # Normalize distributions to single maximum
    abs_max = max([np.max(d[0,:]) for d in dists])
    #print abs_max
    for d in dists:
        d[0,:] = d[0,:]/abs_max



    unique_masses = np.unique(np.concatenate([d[0, :] for d in dists]))
    #print unique_masses

    def score_metric(alpha1, optimizing=True):

        fitted_dists = []
        for d in dists:
            fitted_dists.append(np.zeros(len(d[0, :])))

        for iso in unique_masses:
            # get position of each mass in measured distributions or -1 if not included
            included_dists = []
            for i, dist in enumerate(dists):

                wh = np.where(dist[0, :] == iso)[0]

                if wh.size > 0:
                    included_dists.append(wh[0])
                else:
                    included_dists.append(-1)
                    #fitted_dists[i][wh] += alphas[i] * dists[i][1,:][wh]



            for i1, pos1 in enumerate(included_dists):
                if pos1 >= 0:
                    for i2, pos2 in enumerate(included_dists):
                        if pos2 >= 0:
                            fitted_dists[i1][pos1] += dists[i2][1,:][pos2] * alpha1[i2]


        #print fitted_dists

        obs_concat = np.concatenate([d[0,:] for d in dists])
        fit_concat = np.concatenate(fitted_dists)

        #print obs_concat
        #print fit_concat

        combined_score_num = np.sum((obs_concat - fit_concat)**2)

        combined_score_den = np.sum((obs_concat)**2)

        score = combined_score_num/combined_score_den

        #print score
        if optimizing:
            return score
        else:
            return (obs_concat, fit_concat)

    score_metric(alphas)

    #print [(0,None)]*len(alphas)

    minres = minimize(score_metric, alphas, bounds=[(0,None)]*len(alphas))

    return minres

#print fitscore(distlist)

