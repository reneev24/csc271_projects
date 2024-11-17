/* shows users' reviews. Use for loops because I want to run through reviews 
a specific amount of times */

var userReviews;
userReviews = ['This website helped me so much! - @janedoe1','10/10 website - @nick_matt','This website will be huge one day - @nessa2']

var webRatings;
webRatings = [4,5,3]

const webReviews = document.querySelectorAll('div.web-review');

for(let i = 0; i < webReviews.length; i++) {
	var reviews = webReviews[i].querySelector('div.review1');
	reviews.textContent = userReviews[i];

	var ratings = webReviews[i].querySelector('div.rating');
	var stars = "";

	for (let j = 0; j < 5; j++){
		if (j < webRatings[j]) {
			stars += "★";
		}
		else {
			stars += "☆";
		}

	}

ratings.textContent = stars;

}

/* using do while loop to check email validation
until the condition is met */

var validMail = "@"; //condition 
var email;

const userEmail = document.querySelectorAll('div.web-email');

do {
  email = prompt("Enter your email:");


  if (email && email.includes("@")) {
    isValid = true; 
  } 
  else {
    alert("Invalid. Please include '@'."); 
  }
} 

  while (!isValid); 

alert("Email is valid.");






function validEmail(){
	const userEmail = document.getElementById('email').value;
	const feedbackElement = document.getElementById('submit');
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (emailRegex.test(emailInput)){
		feedbackElement.textContent = "";
	} else{
		feedbackElement.textContent = "Enter a valid email adress.";
		
	}
}



