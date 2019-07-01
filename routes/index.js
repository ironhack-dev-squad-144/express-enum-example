const express = require('express');
const router  = express.Router();
const Celebrity = require("../models/Celebrity");
const celebrityOccupations = require("../enum/celebrity-occupations")

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get("/celebrities", (req, res, next) => {
  Celebrity.find()
    .then(celebrities => {
      res.render("celebrities", {
        celebrities: celebrities
      });
    });
});


// Route to display a form
router.get("/add-celebrity", (req, res, next) => {
  res.render("add-celebrity", {
    celebrityOccupations
  });
});

// Route to handle the form
router.post("/add-celebrity", (req, res, next) => {
  Celebrity.create({
    name: req.body.name,
    occupation: req.body.occupation,
    birthYear: req.body.birthYear,
  })
    .then(celebrity => {
      // Redirect to the detail page of the country
      res.redirect("/celebrities");
    });
});

// ...

module.exports = router;
