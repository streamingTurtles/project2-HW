const express = require("express");
const router = express.Router();

// Import the model burger.js to its object methods to interact with the database
const db = require("../models");
// const login = require("../public/assets/js/login.js");
// const signnup = require("../public/assets/js/signup.js");
// const member = require("../public/assets/js/member.js");

// Testing code to the front End - working!
// router.get('/', function(req, res) {
//     res.json({"message": "Streaming Turtles"});
//     res.render('index');
// });

// Build out the routes
//
// router.get("/", (req, res) => {
//   burger.selectAll((data) => {
//     const hbsObject = {
//       burger: data,
//     };
//     console.log("Hello streaming Turtles, we like yourEats idea!");
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// PAC 02/21,22/2021 - adding login/logout route page/s
// Login
router.get("/page1_signup", (req, res) => {
  console.log("log me in");
  res.render("pages/page1_signup");
});
// Logout
router.get("/logout", (req, res) => {
  res.redirect("/");
});
//restaurant selection
router.get("/page2_restaurant", (req, res) => {
  console.log("im hungry");
  res.render("pages/page2_restaurant");
});
router.get("../view/layouts/main.handlebars", (req, res) => {
  console.log("feed me");
  res.render("../view/layouts/main.handlebars");
});
// checkout food
router.get("/page3_checkout", (req, res) => {
  console.log("feed me");
  res.render("pages/page3_checkout");
});

//sign in
router.get("/index", (req, res) => {
  console.log("Sign in");
  res.render("index");
});

// router.post("/api/burgers", (req, res) => {
//   burger.create(
//     ["burger_name", "devoured"],
//     [req.body.burger_name, req.body.devoured],
//     (result) => {
//       // Send back the ID of the new quote
//       res.json({ id: result.insertId });
//     }
//   );
// });

router.post("/api/signup", (req, res) => {
  db.User.create(req.body).then(function (user) {
    if (user.dataValues.id) {
      res.json({ status: 200 });
    } else {
      res.json({ status: 400 });
    }
  });
});

// router.put("/api/burgers/:id", (req, res) => {
//   const condition = `id = ${req.params.id}`;
//   console.log("condition", condition);
//   console.log("condition", condition);
//   burger.update(
//     {
//       devoured: req.body.devoured,
//     },
//     condition,
//     (result) => {
//       if (result.changedRows === 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       }
//       res.status(200).end();
//     }
//   );
// });

// router.delete("/api/burgers/:id", (req, res) => {
//   const condition = `id = ${req.params.id}`;
//   burger.delete(condition, (result) => {
//     if (result.affectedRows === 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     }
//     res.status(200).end();
//   });
// });

module.exports = router;
