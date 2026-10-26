class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const counts = nums.reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
            return acc;
            }, {});

        return Object.values(counts).some(val => val > 1);
    }
}
