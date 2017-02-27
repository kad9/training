/*var myHeading = document.querySelector('h1');
myHeading.textContent = 'My Hello world!';
*/


// FUNCTIONS
/*displayMessage1 = function()
{ // need to be declared before used, u can pass variables 
	console.log("1 display called");
	alert("1 display called");
	//displayMessage2("Yamini called me");
}

displayMessage2 = function(message)
{ // need to be declared before used, u can pass variables 
	console.log("display 2 called - " + message);
	alert("display 2 called - "       + message);
}*/
/*
displayMethod =function(value)
{
	console.log("Method called ");
	alert("Method called " + value.target);
	
}
var myButton1 = document.getElementById('button1');

myButton1.onclick = displayMethod;


var myButton2 = document.getElementById('button2');

myButton2.onclick = displayMethod;


*/
//myButton.onclick = displayMessage2('sonal');

/* If we want to specify parameters inside parentheses for the function we are calling, 
 * then we can't call it directly — we need to put it inside an anonymous function 
 * so that it isn't in the immediate scope and therefore isn't called immediately.
 *  Now it will not be called until the button is clicked.*/

/*myButton.onclick = function(){
	displayMessage2('My message');
}*/

//EVENTS
// All possible event supported by HTML -http://www.w3schools.com/TAGS/ref_eventattributes.asp
/*var btn = document.getElementById('button');

function random(number) {
  return Math.floor(Math.random()*number);
}

btn.onclick = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}*/

//Custom Events
function random(number) {
	  return Math.floor(Math.random()*number);
	}

var btn = document.querySelector('button');

function bgChange() {//rgb(1,2,3)
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
  
  btn.removeEventListener('click', bgChange);
}   

btn.addEventListener('click', bgChange);// using function



/*btn.addEventListener('click', function() {// using anonymous function
	  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
	  document.body.style.backgroundColor = rndCol;
	});
*/