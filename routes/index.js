var express = require("express");
var router = express.Router();
const passport = require("passport");

router.get("/", function (req, res, next) {
  res.render("home");
});

router.get("/developer", function (req, res) {
  res.render("developer");
});

router.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

router.get("/logout", function (req, res) {
  req.logout(function () {
    res.redirect("/");
  });
});

module.exports = router;
