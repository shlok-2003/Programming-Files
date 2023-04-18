#include <stdio.h>
#include <string.h>

int main(){
    long long phone;
    scanf("%d", &phone);

    int i = 0;
    while(phone > 0)
    {
        phone /= 10;
        i++;
    }
    if(i != 10)
    {
        printf("false %d", i);
    }
    else{
        printf("true %d", i);
    }
}