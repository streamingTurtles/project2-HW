// for testing in the console:
const appName = require('asciiart-logo');
require('console.table');



const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();


// render static content from the public folder
app.use(express.static("public"));
// for the icon
// https://stackoverflow.com/questions/35815840/displaying-images-in-a-handlebars-html
app.use(express.static("public/assets/img")); 
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// Handlebars import here once routes are connecting correctly
// Set Handlebars.
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');




// Import routes and give the server access to them.
const routes = require('./controllers/burgers_controller.js');
app.use(routes);



// Start our server so that it can begin listening to client requests.
app.listen(PORT, () =>
  console.log(`Server listening on: http://localhost:${PORT}`),
  console.log(`<h1>streaming Turtles, LLC</h1>`)
);


// POINT:  this runs in the node console - NOT in the BROWSER console!!!!
console.log('streaming Turtles are here');

// POINT: this doesn't work.  You can't render html undless you use something that is to be recognized as a
// html file or pushes content into a layout already defined and you replace content like arguments in a
// parameter field, kinda like a placehoder for data that is updated or deleted.  The console.log above n the 
// app.listen function - renders in the node engine running in the express server on localhost.  The console in 
// the browser is for the computer the browser is running in? 
`<h1>streaming Turtles, LLC</h1>`



// Diplays Title of the application in the console - I use this to test and conpare what is also displayed in the browser - use as a confidence reference 
function init(){
    const appTitle = appName({ name: "HW 13: The Burger App" }).render();  
    console.log(appTitle);      
  }
init();