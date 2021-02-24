const express = require("express");
const router = express.Router();

// Import the model burger.js to its object methods to interact with the database
const burger = require("../models/burger.js");
const login = require("../models/login.js");

// Testing code to the front End - working!
// router.get('/', function(req, res) {
//     res.json({"message": "Streaming Turtles"});
//     res.render('index');
// });

// Build out the routes
//
router.get("/", (req, res) => {
  burger.selectAll((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log("Hello streaming Turtles, we like yourEats idea!");
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// PAC 02/21,22/2021 - adding login/logout route page/s
// Login
router.get("/page1_login", (req, res) => {
  console.log("log me in");
  res.render("pages/page1_login");
});
// Logout
router.get("/logout", (req, res) => {
  res.redirect("/");
});
//restaurant selection
router.get("/page2_restaurant", (req, res) => {
  console.log("feed me");
  res.render("pages/page2_restaurant");
});

router.post("/api/burgers", (req, res) => {
  burger.create(
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    (result) => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    }
  );
});

router.put("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;
  console.log("condition", condition);
  console.log("condition", condition);
  burger.update(
    {
      devoured: req.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

router.delete("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;
  burger.delete(condition, (result) => {
    if (result.affectedRows === 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
