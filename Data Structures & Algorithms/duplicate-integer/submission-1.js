class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const seen = new Set();
        for (const item of nums) {
            if (seen.has(item)) return true; // Found a duplicate!
            seen.add(item);
        }
        return false;
    }
}
