// By Shlok Prajapati & Prabhat Pankaj
#include <stdio.h>
#include <stdbool.h>
#include <string.h>

void getData();
int donate(int blood[], int type);
int receive(int blood[], int type);

int main(){
    int blood[8] = { 2000, 2000, 2000, 2000, 2000, 2000, 2000, 2000};  //This is the initial blood in milli_litres available in system 
                //    AB+   AB-   A+    A-    B+    B-    O+    O-
    int type = -1;
    while(true)
    {
        printf( "\t\t==========================\n"
                "\t\t| Blood Management System |\n"
                "\t\t==========================\n"
            );
        int n, x = 0;
        printf("\n\t\tDonate Blood \t\t(1)\n\t\tReceive Blood \t\t(2)\n\t\tTo Exit \t\t(0)\n");
        printf("\t\t::Enter Your Choice::    ");
        scanf("%d", &n);

        switch(n)
        {
            case 1:
                printf( "\t\t\t| Donation System |\n"
                        "\t\t\t =================\n");
                getData();

                printf( "\n\t\tAB+ \t\t(0)\n\t\tAB- \t\t(1)\n\t\tA+ \t\t(2)\n\t\tA-\t\t(3)\n"
                        "\t\tB+ \t\t(4)\n\t\tB- \t\t(5)\n\t\tO+ \t\t(6)\n\t\tO-\t\t(7)\n");
                printf("\n\t\tEnter Your Blood Type: \t\t");
                scanf("%d", &type);    
                blood[type] = donate(blood, type);
                break;

            case 2:
                printf( "\t\t\t| Receive System |\n"
                        "\t\t\t ===============\n");
                getData();

                printf( "\n\t\tAB+ \t\t(0)\n\t\tAB- \t\t(1)\n\t\tA+ \t\t(2)\n\t\tA-\t\t(3)\n"
                        "\t\tB+ \t\t(4)\n\t\tB- \t\t(5)\n\t\tO+ \t\t(6)\n\t\tO-\t\t(7)\n");
                printf("\n\t\tEnter The Blood Type You Want: \t\t");
                scanf("%d", &type);
                blood[type] = receive(blood, type);
                break;

            case 0:
                return 0;

            default:
                printf("\a\aPlease Enter your choice Correctly:\a\a\n\n");
                break;
        }
    }

    return 0;
}

void getData(){
    /* Get Gender */
    char gender[12];
    printf("\t\tEnter Your Gender: \t\t");
    scanf("%s", &gender);

    /* Get Name */
    char fname[10], lname[10];
    printf("\t\tEnter Your Full Name: \t\t");
    scanf("%s %s", &fname, &lname);

    /* Get Age */
    int age;
    printf("\t\tEnter Your Age: \t\t");
    scanf("%d", &age);

    /* Get Phone Number */
    long long phoneNumber;
    printf("\t\tEnter Your Number: \t\t");
    scanf("%d", &phoneNumber);

    return;
}

int donate(int blood[], int type){ 
    int don_blood = 0;                                              //Donated Blood
    printf("\t\tAmount Of Blood To Donate: \t");
    scanf("%d", &don_blood);
    printf("\n");

    switch (type)
    {
        case 0:
            goto donation;
            break;

        case 1:
            goto donation;
            break;

        case 2:
            goto donation;
            break;

        case 3:
            goto donation;
            break;

        case 4:
            goto donation;
            break;

        case 5:
            goto donation;
            break;

        case 6:
            goto donation;
            break;

        case 7:
            goto donation;
            break;
    }

    donation:
        blood[type] += don_blood;

    printf("\t\tTHANK YOU FOR YOUR COOPERATION\n\n");

    printf("\t\tThe Blood Contents are: \n\t");
        for(int i = 0; i < 8; i++)
        {
            printf("\t%d-ml", blood[i]);
        }
        printf("\n\t\t   AB+ \t   AB- \t   A+ \t   A- \t   B+ \t   B- \t   O+ \t   O- \n\n");

    return blood[type];
}

int receive(int blood[], int type){
    int receive_blood = 0;
    
    switch (type)
    {
        case 0:
            printf("\t\tThe Blood Level of AB+ is: \t\t%d", blood[0]);
            break;
        
        case 1:
            printf("\t\tThe Blood Level of AB- is: \t\t%d", blood[1]);
            break;

        case 2:
            printf("\t\tThe Blood Level of A+ is: \t\t%d", blood[2]);
            break;

        case 3:
            printf("\t\tThe Blood Level of A- is: \t\t%d", blood[3]);
            break;

        case 4:
            printf("\t\tThe Blood Level of B+ is: \t\t%d", blood[4]);
            break;

        case 5:
            printf("\t\tThe Blood Level of B- is: \t\t%d", blood[5]);
            break;

        case 6:
            printf("\t\tThe Blood Level of O+ is: \t\t%d", blood[6]);
            break;    

        case 7:
            printf("\t\tThe Blood Level of O- is: \t\t%d", blood[7]);
            break;                            
    }

    printf("\n\t\tAmount Of Blood You Want: \t\t");
    scanf("%d", &receive_blood);

    if(blood[type] - receive_blood >= 0)
    {
        blood[type] -= receive_blood;
        printf("\t\tDONE\n");
    }
    else
    {
        printf("\n\t\tAmount Of Blood Not Available\n");
    }
    printf("\t\tTHANK YOU FOR YOUR COOPERATION\n\n");

    printf("\t\tThe Blood Contents are: \n\t");
    for(int i = 0; i < 8; i++)
    {
        printf("\t%d-ml", blood[i]);
    }
    printf("\n\t\t   AB+ \t   AB- \t   A+ \t   A- \t   B+ \t   B- \t   O+ \t   O- \n\n");
    
    return blood[type];
}