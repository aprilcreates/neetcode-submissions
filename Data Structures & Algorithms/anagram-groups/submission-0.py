class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = {}
        for str in strs:
            sorted_word = "".join(sorted(list(str)))
            if sorted_word in anagrams:
                anagrams[sorted_word] += [str]
            else:
                anagrams[sorted_word] = [str]

        return list(anagrams.values())