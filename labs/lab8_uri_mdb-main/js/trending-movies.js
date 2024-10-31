/* TO DO:

	- Create an array to hold the titles of your favorite movie *and* your partners' favorite movies.

	- Create an array with URLs for each movie poster. 
	  Note: Search Google Images for the movie title with "wiki" (i.e., "Mean Girls wiki") to find the official poster on Wikipedia.
	
	- Create an array with links to the HTML files for each movie page.
	  Note: Name each HTML file after the movie title (e.g., mean-girls.html). 
            Make sure your partners’ movie pages are live before adding links to their favorites.

	- Create an array to store each movie's rating (1 to 5). Try a different rating for each movie!

*/

var fav_movies;
fav_movies = ['White Chicks', 'Cars', 'The Dark Knight']

var posters;
posters = ['https://upload.wikimedia.org/wikipedia/en/2/2b/White_chicks.jpg?20180225191816','https://upload.wikimedia.org/wikipedia/en/3/34/Cars_2006.jpg?20220419102425','https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg?20170315171411'];

var ratings;
ratings = ['8.5','9','8']

var movieLinks;
movieLinks = ['white-chicks.html', 'white-chicks.html', 'white-chicks.html']

/* TO DO:
	
	- Select ALL movie card elements in the index.html file and store in a variable.

	- Loop through each card to update its content with movie information:
	  - Select the current movie image element. 
	  - Set its link to the movie poster link from the array. 
	  - Set its alt text to the movie title from the array. 

	  - Select the current movie link element.
	  - Set its link to the HTML page for that movie from the array. 
	  - Set its text to the movie title from the array.

	  - Select the current movie rating element.
	  - Create a variable that will hold the filled and empty stars. 
	  - Loop to generate star symbols based on the rating:
	    - If current counter is less than the rating, then add "★".
	    - Otherwise, add "☆".
	  - Set the movie rating element's text to display the generated stars. 

*/

const movieCards = document.querySelectorAll('div.movie-card');

for(let i = 0; i < movieCards.length; i++) {
	var movieImage = movieCards[i].querySelector('img.movie-image');
	movieImage.src = posters[i];
	movieImage.alt = fav_movies[i];

	var movieLink = movieCards[i].querySelector('a.movie-link');
	movieLink.href = movieLinks[i];
	movieLink.textContent = fav_movies[i];

	var movieRating = movieCards[i].querySelector('div.rating');
	var stars = "";

	for (let j = 0; j < 5; j++){
		if (j < ratings[j]) {
			stars += "★";
		}
		else {
			stars += "☆";
		}
	}

movieRating.textContent = stars;

}