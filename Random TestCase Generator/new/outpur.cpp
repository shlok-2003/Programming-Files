#include<bits/stdc++.h>
using namespace std;

void online_judge() {
    #ifndef ONLINE_JUDGE
        freopen("input.txt", "r", stdin);    freopen("output.txt", "w", stdout);
    #endif
}

int main(){
    online_judge();

    int t;
    cin >> t;

    while(t--)
    {
        int n, m;
        cin >> n >> m;

        vector<vector<int>> arr(n, vector<int>(m));
        for(auto &it : arr)
            for(auto &i : it)
                cin >> i;

        int even = 0, odd = 0;
        for(auto &it : arr)
        {
            for(auto &i : it)
            {
                if(i % 2 == 0)
                    even++;
                else    
                    odd++;
            }
        }

        cout << even << " " << odd << "\n";
    }

    return 0;
}