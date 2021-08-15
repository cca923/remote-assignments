const { query } = require("express");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const name = req.cookies.name;
  if (name) {
    res.redirect("/myName");
  } else {
    res.render("trackName");
  }
});

module.exports = router;
