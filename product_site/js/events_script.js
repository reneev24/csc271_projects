// function for hover effect on user profiles
function addProfileHover(event){
	event.target.style.backgroundColor = rgb(228, 207, 247);
	event.target.style.transform = "scale(2.05)";
	even.target.style.transition = "transform 0.2s, background-color 0.2s";
}

//function for removing hover effect on user profiles
function removeProfileHover(event){
	event.target.style.backgroundColor = "";
	event.target.style.transform = "";
}

const userProfiles = document.querySelectorAll(".userProfile");

userProfiles.forEach(card=>{
	card.addEventListener("mouseenter", addProfileHover);
	card.addEventListener("mouseleave", removeProfileHover);
}); 