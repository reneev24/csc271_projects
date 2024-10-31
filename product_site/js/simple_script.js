//gathers user input
var name = prompt("What's your name?");
var age = prompt("How old are you?");
var location = prompt("Where are you from?");
var descr = prompt("What else do you want others to know about you?");

//user info is displayed
println("Name:" + name);
println("Age:" + age);
println("Location:" + location);
println("..." + descr);

//calculation for amount of friends
var friends = 2
var newfriends = 1
var totalfriends = (friends + newfriends);


//shows name 
var nameElement = document.getElementById("name");
element.innerHTML = name;

//shows age
var ageElement = document.getElementsByClassName("age")[0];
element.innerHTML = age;

//shows location
var locationElement = document.getElementsByClassName("location")[0];
element.innerHTML = location;

//shows descr
var paragraphElement = document.getElementsByTagName("p");
paragraphElement[0].textContent = descr;
paragraphElement[1].innerHTML += "<strong>" + More Info: + "</strong>"

//result for amount of friends
var friendsElement = document.getElementById('friends');
element.innerHTML += "Friends:" + friends + "New Friends:" + newfriends + "Total Friends:" + totalfriends;

const name = document.querySelector(".name");






