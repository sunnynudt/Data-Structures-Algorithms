// 时间复杂度O(n)，空间复杂度O(1)
public class MaximumSubarry {
    // https://soulmachine.gitbooks.io/algorithm-essentials/java/dp/maximum-subarray.html
    public int maxSubArray1(int[] nums) {
        int maxLocal = nums[0];
        int global = nums[0];
        for (int i = 1; i < nums.length; ++i) {
            maxLocal = Math.max(nums[i], nums[i] + maxLocal);
            global = Math.max(global, maxLocal);
        }
        return global;
    }

    // 地址：https://leetcode.com/problems/maximum-subarray/discuss/20193/DP-solution-and-some-thoughts
    public int maxSubArray2(int[] A) {
        int n = A.length;
        int[] dp = new int[n]; // dp[i] means the maximum subarray ending with A[i]
        dp[0] = A[0];
        int max = dp[0];

        for (int i = 1; i < n; i++) {
            dp[i] = A[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
            max = Math.max(max, dp[i]);
        }

        return max;
    }
}