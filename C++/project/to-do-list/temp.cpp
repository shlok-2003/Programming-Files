#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define Node struct mynode

Node{
    char name[20];
    char gen[6];
    int age;
    struct mynode* link;
};

Node* start = NULL;
void add_node(char lol[20], char der[6], int b) {
    Node *newptr = NULL, *ptr;
    newptr = (Node*)malloc(sizeof(Node));
    strcpy(newptr->name, lol);
    strcpy(newptr->gen, der);

    newptr->age = b;
    newptr->link = NULL;
    if (start == NULL)
        start = newptr;
    else {
        ptr = start;
        while (ptr->link != NULL)
            ptr = ptr->link;
        ptr->link = newptr;
    }
}
