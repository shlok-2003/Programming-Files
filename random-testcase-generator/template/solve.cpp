/********   HARE KRISHNA ********/  
#include <bits/stdc++.h>
using namespace std;

#define eps 			1e-9
#define inf 			1e18
#define mod 			1000000007
#define pi 				3.1415926535897932384626433832795

#define ll        		long long
#define int 			long long int

#define endl			"\n"
#define sp 				" "
#define yes				cout << "YES" << endl
#define no				cout << "NO" << endl

#define ff 				first
#define ss 				second
#define mp 				make_pair
#define pb				push_back
#define eb				emplace_back
#define big 			greater<int>()
#define all(x)			(x).begin(), (x).end()

#define printAll(a)		for(auto& i: a)	cout << i << " "; cout << endl
#define printMap(a)		for(auto& i: a)	cout << i.ff << sp << i.ss << endl

#define fast			ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)

void online_judge() {
	#ifndef ONLINE_JUDGE
		freopen("input.txt", "r", stdin); freopen("output.txt", "w", stdout);
	#endif
}

/********   Write your code here ********/
void solve() {

	int n;
	cin >> n;

	string str;
	cin >> str;

	int ans = 0;
	for(int i = 0; i < n-2; i++)
		if(str[i] == str[i+2])
			ans++;

	cout << n - 1 - ans << endl;
}

/********   Main Function starts here ********/
signed main() {
	// fast;
	online_judge();
	int tc = 1;	
	cin >> tc;		// To remove Test Case, just comment this

	for(int i = 1; i <= tc; i++) {
		// cout << "Case #" << i << ": ";
		solve();

		/*
		if(solve())
			yes;
		else
			no;
		*/
	}
	return 0;
}
/********   Main Function ends here ********/				