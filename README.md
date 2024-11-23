# Assignment 1 - ReactJS app.

Name: [Graham-Heeney]

## Overview.

[This project demonstrates the use of react with the TMDB API. Displaying data from an outside database with parameterized endpoints and static enpoints and getting them to be compatible with our react app is the goal of this project.]

### Features.
[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]
 
+ Top-Rated endpoint
+ Movie Cast enpoint
+ Now Playing endpoint
+ Pagination
+ Firebase authorization

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.] 

e.g.
+ Top Rated Movies:  /movie/top_rated — Retrieves a list of top-rated movies.
+ Movie Cast:  /movie/:id/cast — Fetches the cast details for a specific movie.
+ Now Playing Movies:  /movie/now_playing — Displays a list of movies that are currently playing in theaters.

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /movies/favorites: Displays a list of the user's favorite movies.
+ /movies/top-rated: Displays a list of top-rated movies.
+ /signup: Displays the sign-up page for Firebase authentication.
+ /login: Displays the login page for Firebase authentication.  
+ /movies/now-playing: Displays a list of movies currently playing in cinemas.


## Independent learning (If relevant).

 + Pagination: pagination allows a user to select a specific page out of a collection of pages. this is useful when it comes to large adatsets. the endpoints had to be fetched with pagination in mind it wasnt just done on the page file.
 https://mui.com/material-ui/react-pagination/

 + Firebase: Firebase was used to create a login and signup system for the app. Firebase was installed as a whole, as there were initial attempts to use the Firestore database to save user inputs (e.g., saving favorites to an account). However, the implementation of Firestore was cut out, but the use of its authentication is still in place. You can view the registered accounts on the Firebase website.
 https://firebase.google.com/

 + CSS: while the use of css may not have been required as such, the use if it allowed me to custimise my project in better detail e.g. adding a hover feature over the movie cards. there was other bits of css to allow me to make the app look the way i want. references for some of these are below.
 https://clouddevs.com/react/usehover-hook/
 https://developer.mozilla.org/en-US/docs/Glossary/Flexbox
 https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model