import re


class Sequence:

    def __init__(self, raw_seq):
        self.raw_seq = raw_seq.replace(" ", "").replace("\r", "").replace("\n", "")

        self.patt = '\(([0-9\.\-\+]+)\)'
        self.stripped_seq = re.sub(self.patt, '', self.raw_seq).upper()

    def validate(self):

        if self.stripped_seq == "":
            return False

        allowed_chars = 'ACDEFGHIKLMNPQRSTVWY'
        for char in self.stripped_seq:
            if char not in allowed_chars:
                return False
        return True


    def mods(self):
        mod_masses = iter(re.findall(self.patt, self.raw_seq))
        mod_dict = {}
        mstring = ''


        for k in re.split(self.patt, self.raw_seq)[:-1:2]:
            if k:
                mstring += k
                mod_dict[len(mstring)-1] = float(mod_masses.next())

        return mod_dict