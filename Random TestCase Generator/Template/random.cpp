#include<bits/stdc++.h>
using namespace std;
typedef long long int ll;

string rand_str(ll n) {
	srand(time(0));
	
	string s;
    string str("abcdefghijklmnopqrstuvwxyz");
    while((ll)s.size() < n){
        random_device rd;
        mt19937 generator(rd());
        shuffle(str.begin(), str.end(), generator);
        s += str;
    }
    return s.substr(0, n);        
}

ll rand_num(ll max , ll min){
	return rand()%(max-min+1)+min;
}

void solve(){

	int t = rand_num(1e3, 1);
	cout << t << endl;

	while(t--)
	{
		
		int n = rand_num(100, 2);
		cout << n << endl;

		string str = rand_str(n);
		cout << str << endl;
	}
}

int main() {
	#ifndef ONLINE_JUDGE
        freopen("input.txt", "r", stdin);
        freopen("output.txt", "w", stdout);
	#endif
	
	ll t = 5;

	solve();
	return 0;
}