class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freqMap = {}
        for num in nums:
            if num not in freqMap:
                freqMap[num] = 1
            else:
                freqMap[num] += 1
        sorted_freqMap_keys = sorted(freqMap, key=freqMap.get, reverse=True)
        
        return sorted_freqMap_keys[0:k]
        