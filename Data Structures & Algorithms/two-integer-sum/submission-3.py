class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for current_index, current_num in enumerate(nums):
            complement = target - current_num
        
            if complement in seen:
                return [seen[complement], current_index]

            else:
                seen[current_num] = current_index