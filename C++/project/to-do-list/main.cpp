#include <iostream>
using namespace std;

// Creation of the 'To Do' Nodes
class ListNode{
    public:
        string msg;
        ListNode* next;
    
    private:
        ListNode() {
            this -> msg = "";
            next = NULL;
        }
};

int main() {
}