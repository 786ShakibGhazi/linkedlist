#include<stdio.h>
#include<stdlib.h>
#define SIZE 100
char stack[SIZE];
int top =-1;
void push(char item)
{
    if(top >= SIZE-1)
        {
            printf("\nStack Overflow.");
        }
    else
        {
            top = top+1;
            stack[top] = item;
         }
}
char pop()
{
    char item ;
     if(top <0)
      {
             printf("stack under flow: invalid infix expression");
     getchar();
     exit(1);
      }
      else
        {
            item = stack[top];   top = top-1;   return(item);
        }
}
char pop()
{
    char item ;
     if(top <0)
        {
            printf("stack under flow: invalid infix expression");
            getchar();
            exit(1);
        }
            else
            {
               item = stack[top];
                top = top-1;
                return(item);
            }
}

