class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const filtered = s.match(/[a-z0-9]/gi);
        if (filtered == null)
        {
            return true;
        }
        const text = filtered.map(f => f.toLowerCase());
        return text.join('') === text.reverse().join('');
    }
}
