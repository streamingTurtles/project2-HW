const db = require("../models");
var passport = require("../config/passport.js");

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", function (req, res) {
    console.log("feed me");
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error

  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id,
      });
    }
  });
  app.get("/page1_signup", (req, res) => {
    console.log("Sign in");
    res.render("pages/page1_signup");
  });
  // Login
  app.get("/", (req, res) => {
    res.render("index");
  });
  // Logout
  app.get("/logout", (req, res) => {
    res.redirect("/");
  });
  //restaurant selection
  app.get("/page2_restaurant", (req, res) => {
    console.log("im hungry");
    res.render("pages/page2_restaurant");
  });

  // checkout food
  app.get("/page3_checkout", (req, res) => {
    res.render("pages/page3_checkout");
  });

  app.post("/api/signup", (req, res) => {
    db.User.create(req.body).then(function (user) {
      if (user.dataValues.id) {
        res.json({ status: 200 });
      } else {
        res.json({ status: 400 });
      }
    });
  });
};
