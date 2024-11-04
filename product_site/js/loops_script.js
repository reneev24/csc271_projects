/* shows users' reviews. Use for loops because I want to run through reviews 
a specific amount of times */

var reviews;
reviews = ['This website helped me so much!','10/10 website','With more improvment, this website will be huge']

var webRatings;
webRatings = ['4','5', '3']

const webReviews = document.querySelectorAll('div.web-review');

for(let i = 0; i < webReviews.length; i++) {
	var reviews = webReviews[i].querySelector('div.review1');
	reviews.textContent = reviews[i];

	var webRatings = webReviews[i].querySelector('div.rating');
	var stars = "";

	for (let j = 0; j < 5; j++){
		if (j < webRatings[j]) {
			stars += "★";
		}
		else {
			stars += "☆";
		}
	}

webRatings.textContent = stars;

}

