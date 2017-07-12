import re
from pyteomics import mass

class SequenceHEM:
    def __init__(self, raw_seq):
        self.raw_seq = raw_seq.replace(" ", "").replace("\r", "").replace("\n", "")
        self.patt = '\((.+?)\)'
        self.stripped_seq = re.sub(self.patt, '', self.raw_seq).upper()

    def validate(self):
        if self.stripped_seq == "":
            return False

        allowed_chars = 'ACDEFGHIKLMNPQRSTVWY'
        for char in self.stripped_seq:
            if char not in allowed_chars:
                return False

        for mod in self.mods().values():
            try:
                mass.Composition(mod)
            except:
                return False

        return True

    def mods(self):
        mod_masses = iter(re.findall(self.patt, self.raw_seq))
        mod_dict = {}
        mstring = ''

        for k in re.split(self.patt, self.raw_seq)[:-1:2]:
            if k:
                mstring += k
                mod_dict[len(mstring) - 1] = mod_masses.next()

        return mod_dict

    def aion_composition(self, n):
        mods = self.mods()
        #print mods
        comp0 = mass.Composition(self.stripped_seq[:n])

        comp0['C'] -= 1
        comp0['H'] -= 2
        comp0['O'] -= 2

        #print comp0
        for i in mods:
            #print i
            #print i < n
            if i < n:
                if mods[i][0] == '-':
                    modComp = mass.Composition(formula=mods[i][1:])
                    modComp = {k: -modComp[k] for k in modComp}
                else:
                    modComp = mass.Composition(formula=mods[i])
                #print modComp
                for element in modComp:
                    if element in comp0:
                        comp0[element] += modComp[element]
                    else:
                        comp0[element] = modComp[element]
        print comp0
        return comp0


