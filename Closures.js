function showName (firstName, lastName) {
​var nameIntro = "Your name is ";
    // this inner function has access to the outer function's variables, including the parameter​
​function makeFullName () { 
​return nameIntro + firstName + " " + lastName;  
}
​
​return makeFullName ();
}
​
showName ("Sonal", "Kadam"); // Your name is Sonal Kadam
