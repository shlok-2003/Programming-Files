#include <iostream>
using namespace std;

bool getData(int x);

int main(){
    int blood[8] = { 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000};   //This is the initial blood in milli_litres available in system 
                //    AB+   AB-   A+    A-    B+    B-    O+    O-
    int type = -1;

    while(true)
    {
        cout << "\t\t==========================\n"
                "\t\t| Blood Management System |\n"
                "\t\t==========================\n";
        
        cout << "\n\t\tDonate Blood \t\t(1)\n\t\tReceive Blood \t\t(2)\n\t\tTo Exit \t\t(0)\n";
        cout << "\t\t::Enter Your Choice::    ";
        int n; cin >> n;     
        int x = 0;

        switch(n)
        {
            case 1:
                x = 1;
                if(getData(x) == true)
                {
                    cout << "\t\tDetails Verified\n\n";
                }
                else
                {
                    "\t\tPlease Enter Correct Details\n\n";
                    break;
                }

            case 2:

            case 3:

            case 0:
                return 0;     

            default:
                cout << "\a\aPlease Enter your choice Correctly:\a\a\n\n";
                break;
        }
    }

    return 0;
}

bool getData(int x){
    
    string gender;              //Get Gender
    cout << "\t\tEnter Your Gender: \t\t";          getline(cin >> ws, gender);

    string name;                //Get Name
    cout <<"\t\tEnter Your Full Name: \t\t";        getline(cin >> ws, name);

    int age;                    //Get Age
    cout << "\t\tEnter Your Age: \t\t";             cin >> age; 

    long long phoneNumber;      //Get Phone Number
    cout << "\t\tEnter Your Phone Number: \t\t";    cin >> phoneNumber;
}

