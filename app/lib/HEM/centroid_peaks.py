import math
def centroid_peaks(mz_array, intensity_array):
    """
    Perform a Gauss fit to centroid the peaks for the property
    :py:attr:`centroidedPeaks`
    """
    tmp = []
    print intensity_array
    for pos, i in enumerate(intensity_array[:-1]):
        if pos <= 1:
            continue
        if 0 < intensity_array[pos - 1] < i > intensity_array[pos + 1] > 0:
            # local maximum ...
            # if 827 <= mz_array[pos] <= 828:
            #    print("::",i,"@",mz_array[pos])
            #    print("Found maximum",i,"@",mz_array[pos],intensity_array[pos-1] ,'<' ,i ,"> ",intensity_array[pos+1] )
            x1 = mz_array[pos - 1]

            y1 = intensity_array[pos - 1]
            x2 = mz_array[pos]
            y2 = intensity_array[pos]
            x3 = mz_array[pos + 1]
            y3 = intensity_array[pos + 1]
            if x2 - x1 > (x3 - x2) * 10 or (x2 - x1) * 10 < x3 - x2:
                # no gauss fit if distance between mz values is too large
                continue
            if y3 == y1:
                # i.e. a reprofiledSpec
                # we start a bit closer to the mid point.
                before = 3
                after = 4
                # while (not 0 < y1 < y2 > y3 > 0) and y1 == y3 and after < 10:  #we dont want to go too far
                # This used to be in here and I cannpt make sense out of it
                #
                while y1 == y3 and after < 10:  # we dont want to go too far
                    if pos - before < 0:
                        lower_pos = 0
                    else:
                        lower_pos = pos - before
                    if pos + after >= len(mz_array):
                        upper_pos = len(mz_array) - 1
                    else:
                        upper_pos = pos + after
                    x1 = mz_array[lower_pos]
                    y1 = intensity_array[lower_pos]
                    x3 = mz_array[upper_pos]
                    y3 = intensity_array[upper_pos]
                    if before % 2 == 0:
                        after += 1
                    else:
                        before += 1

            # if not (0 < y1 < y2 > y3 > 0):# or y1 == y3:
            #     # Then we wouldnt be in this loop
            #     #If we dont check this, there is a chance to apply gauss fit to a section
            #     #where there is no peak.
            #     continue
            try:
                doubleLog = math.log(y2 / y1) / math.log(y3 / y1)
                mue = (doubleLog * (x1 * x1 - x3 * x3) - x1 * x1 + x2 * x2) / (
                2 * (x2 - x1) - 2 * doubleLog * (x3 - x1))
                cSquarred = (x2 * x2 - x1 * x1 - 2 * x2 * mue + 2 * x1 * mue) / (2 * math.log(y1 / y2))
                A = y1 * math.exp((x1 - mue) * (x1 - mue) / (2 * cSquarred))

                # if A > 1e20:
                # print(mue, A, doubleLog, cSquarred)
                # print(x1, "\t", y1)
                # print(x2, "\t", y2)
                # print(x3, "\t", y3)
                # print()
            except:
                # doubleLog = math.log(y2 / y1) / math.log(y3 / y1)
                # mue = (doubleLog * ( x1 * x1 - x3 * x3 ) - x1 * x1 + x2 * x2 ) / (2 * (x2 - x1) - 2 * doubleLog * (x3 - x1))
                # cSquarred = ( x2*x2 - x1*x1 - 2*x2*mue + 2*x1*mue )/ ( 2* math.log(y1/y2 ))
                # A = y1 * math.exp( (x1 - mue) * (x1 - mue) / ( 2 * cSquarred ) )
                continue
            tmp.append((mue, A))
    # for mue, A in tmp:
    #     print(mue, "\t", A)
    return tmp
