// for testing in the console:
const appName = require("asciiart-logo");
require("console.table");
const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// render static content from the public folder
app.use(express.static("public"));
// for the icon
// https://stackoverflow.com/questions/35815840/displaying-images-in-a-handlebars-html
const db = require("./models");
// app.use(express.static("public/assets/img"));
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars import here once routes are connecting correctly
// Set Handlebars.
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./controllers/burgers_controller.js")(app);

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});

// POINT:  this runs in the node console - NOT in the BROWSER console!!!!
console.log("streaming Turtles are here");

// Diplays Title of the application in the console - I use this to test and conpare what is also displayed in the browser - use as a confidence reference
function init() {
  const appTitle = appName({ name: "Welcome to yourEats!" }).render();
  console.log(appTitle);
}
init();
