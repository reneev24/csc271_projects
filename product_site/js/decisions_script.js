//asks user age (first decision node)
var age = prompt("How old are you?");
var matchNode = document.getElementById("match");

//displays match results
if(age >= 24 || age <= 18){
	matchNode.innerText = "Not a Match!";
} 
else{
	matchNode.innerText = "It's a Match!";
}

//asks user how far they live (second decison node)
var distance = prompt("Do you live in the same state?");
var matchNode = document.getElementById("match");

//displays match results
if(distance == 'yes'){
	matchNode.innerText = "It's a Match!";
}
else{
	matchNode.innerText = "Not a Match!";
}

//asks efforts with distance (third decision node)
var effort = prompt("Are you open to long-distance?")
var matchNode = document.getElementById("match");

if(effort == 'yes'){
	matchNode.innerText = "It's a Match!";
}
else{
	matchNode.innerText = "Not a Match!";
}
