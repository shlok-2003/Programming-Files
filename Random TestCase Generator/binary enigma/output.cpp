#include <iostream>
#include <cmath>
using namespace std;

void online_judge() {
    #ifndef ONLINE_JUDGE
        freopen("input.txt", "r", stdin);    freopen("output.txt", "w", stdout);
    #endif
}
int main() {
    online_judge();
    
    int t;
    cin >> t;

    while(t--)
    {
        double a;
        cin >> a;

        cout << ceil(sqrt(a)) << endl;
    }
}