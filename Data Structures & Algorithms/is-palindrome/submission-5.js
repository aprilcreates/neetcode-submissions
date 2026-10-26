class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // filter only alphanumeric characters
        const filtered = s.match(/[a-z0-9]/gi);
        console.log(filtered);
        if (filtered == null)
        {
            return true;
        }
        const text = filtered.join('').toLowerCase();
        return text === text.split('').reverse().join('');
    }
}
