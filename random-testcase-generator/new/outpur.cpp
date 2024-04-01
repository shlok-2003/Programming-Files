#include <bits/stdc++.h>
using namespace std;

void online_judge() {
    #ifndef ONLINE_JUDGE
        freopen("input.txt", "r", stdin);    freopen("output.txt", "w", stdout);
    #endif
}

class Solution
{
public:
    int maxProduct(vector<int> &nums)
    {
        int maxi = INT_MIN;
        int prod = 1;

        for (int i = 0; i < nums.size(); i++)
        {
            prod *= nums[i];
            maxi = max(prod, maxi);
            if (prod == 0)
                prod = 1;
        }
        prod = 1;
        for (int i = nums.size() - 1; i >= 0; i--)
        {
            prod *= nums[i];

            maxi = max(prod, maxi);
            if (prod == 0)
                prod = 1;
        }
        return maxi;
    }
};

int main()
{
    online_judge();
    int t;
    cin >> t;

    while (t--)
    {
        int n;
        cin >> n;

        vector<int> nums(n);
        for (int &i : nums)
            cin >> i;

        Solution ob;
        cout << ob.maxProduct(nums) << endl;
    }

    return 0;
}