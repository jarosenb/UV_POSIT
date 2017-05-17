import numpy as np


def compute_averagine_composition(sequence):

    rawseq = sequence.stripped_seq

    composition_dict = {  # [H, C, N, O, S]
        'A': [5, 3, 1, 1, 0],
        'C': [5, 3, 1, 1, 1],  # IAM is included
        'D': [5, 4, 1, 3, 0],
        'E': [7, 5, 1, 3, 0],
        'F': [9, 9, 1, 1, 0],
        'G': [3, 2, 1, 1, 0],
        'H': [7, 6, 3, 1, 0],
        'I': [11, 6, 1, 1, 0],
        'K': [12, 6, 2, 1, 0],
        'L': [11, 6, 1, 1, 0],
        'M': [9, 5, 1, 1, 1],
        'N': [6, 4, 2, 2, 0],
        'P': [7, 5, 1, 1, 0],
        'Q': [8, 5, 2, 2, 0],
        'R': [12, 6, 4, 1, 0],
        'S': [5, 3, 1, 2, 0],
        'T': [7, 4, 1, 2, 0],
        'V': [9, 5, 1, 1, 0],
        'W': [10, 11, 2, 1, 0],
        'Y': [9, 9, 1, 2, 0]
    }

    composition_dict = {k: np.array(v) for k, v in composition_dict.items()}

    averagine_array = np.zeros(5)

    for aa in rawseq:
        averagine_array += composition_dict[aa]

    averagine_array = averagine_array/len(rawseq)

    return averagine_array
