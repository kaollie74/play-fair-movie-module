// 1. requiring the express module and
// setting it to the variable express
const express = require('express');


// 2. setup our app. since we required express,
// we can set the variable app to the express function.
const app = express();

// 3. setup static files. Our files will be static
// for this one use the 'USE' method with our 'app' variable.
// and have the express variable inside with the 'static' method.
// inside 'static' we are calling our 'public' folder which is inside 
// our 'SERVER' folder. 
app.use(express.static('server/public'));

//When we do a POST and want to get data from a 'request'
// we need help, we need 'BODY-PARSER' which is installed automatically
// with express.

/********** I need to to this for POST ************/
let bodyParser = require('body-parser')
app.use( bodyParser.urlencoded( {extended: true}));
// setup route to return movies
const movieData = require('./modules/movie.module')
app.get('/movies' , (req, res) =>{
    res.send(movieData);
    
})

/*************  I need to do this for POST  **************** */
app.post( '/movies' , (req, res)=> {
   // get the movie from the request. check line 22
    let newMovie = req.body; 
    console.log('we are adding the movie', newMovie);
    
    // add it onto the array of movies
    movieData.push(newMovie);
    // A good server always responds - 201 means Created! (added movie)
    res.sendStatus(201);
})

const PORT = 5000;


// Start the server listening - do this last, 
// after setting up routes, nad all the things.
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
    
})
