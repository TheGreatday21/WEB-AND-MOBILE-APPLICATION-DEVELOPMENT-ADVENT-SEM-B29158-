We started off by brain storming how to set up a program that shows the number of people actively accessing a website 
The program was to count the number of people coming to and leaving the website and ensuring that the threshold number of participants was not exceeded
We first let the initial number of user in a variable be 170

```
let number_of_users = 170;
```
We then made a conditional statement using if and else loops
```
if(number_of_users > 100){
    console.log("Network is overloaded");
}
```
We then created variables for those who were joining and those who were leaving the website
```
let joining = 10;
let leaving = 10;

let current_users = number_of_users;
```
The total number of current users was to be the new variable current_users

We then came up with an idea to use a nested loop of a while loop in a for loop 
This was to create 2 scenarios were users were joining and others leaving
            
            ///////SCENARIO 1////////
While the number of users of the site is less than 200
```
while (current_users < 200)
```
That if the current users on the website were also less than 100, the program would output Network Stable and else of this argument the program would output Network unstable ie (if the number of users is initially less than 200 but less than 100 , it will print network stable and keep on adding 10 till the number of users exceeds 100 and it will print network unstable till it reaches the set limit of 200 users  )

```
while (current_users < 200) {
  if (current_users < 100) {
    console.log("Network is stable.");
  } else {
    console.log("Network is unstable");
  }
  current_users = current_users + joining;
}
```
        ////////SCENARIO 2//////////
In this case we assume the maximum threshold of users can be or has been  reached but if the  current users are greater than 100 , the code will remove 10 users and print network unstable until the users are below 100 and print network stable 
```
current_users = 200;
while (current_users > 0) {
  if (current_users < 100) {
    console.log("Network is stable.");
  } else {
    console.log("Network is unstable");
  }
  current_users = current_users - joining;
}
```























