#include<bits/stdc++.h>
using namespace std;

void online_judge() {
    #ifndef ONLINE_JUDGE
        freopen("./Testcases/input/input04.txt", "r", stdin);    freopen("./Testcases/output/output04.txt", "w", stdout);
    #endif
}

int main(){
    online_judge();

    int t;
    cin >> t;

    while(t--)
    {
        float p, s;
        cin >> p >> s;

        cout << fixed << setprecision(6);

        float side = p / 12;

        cout << side << " " << side << " " << side << endl;
    }
    return 0;
}