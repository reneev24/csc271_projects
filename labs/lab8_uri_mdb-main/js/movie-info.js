/* TO DO:

    - Create an array to hold the title of your favorite movie, URL for movie poster, your rating, and synopsis.

    - Select the movie image element.
    - Set its link to the movie poster link from the array. 
    - Set its alt text to the movie title from the array.

    - Select the movie name element.
    - Set its text to the movie title from the array.

    - Select the movie description element.
    - Set its text to the movie synopsis from the array.

    - Select the movie rating element.
    - Create a variable that will hold the filled and empty stars. 
    - Loop to generate star symbols based on the rating:
        - If current counter is less than your rating, then add "★".
        - Otherwise, add "☆".
    - Set the movie rating element's text to display the generated stars. 

*/

var movieName;
movieName = ['White Chicks']

var poster:
moviePoster = ['https://upload.wikimedia.org/wikipedia/en/2/2b/White_chicks.jpg?20180225191816']

var rating:
rating = ['8.5']

var descr:
descr = ['A comedic movie involving two cops on a mission to save their jobs.'];

var movieImage = movieCards[i].querySelector(".movie-image");
    movieImage.src = movieInfo[i];
    movieImage.alt = movieInfo[i];
   
var movieName = movieCards[i].querySelector("movie-name");



