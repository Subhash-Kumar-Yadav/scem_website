const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");

const router = new express.Router();

router.get("/" , (req , res) => {
    res.render("index");
})

router.get("/events" , (req , res) => {
    res.render("events");
})

router.get("/competition" , (req , res) => {
    res.render("competition");
})

router.get("/verification" , (req , res) => {
    res.render("verification");
})

router.get("/contact" , (req , res) => {
    res.render("contact");
})

router.get("/team" , (req , res) => {
    res.render("team");
})

router.get("/newsletter" , (req , res) => {
    res.render("newsletter");
})

router.get("*" , (req , res) => {
    res.render("error", {
        errorMessage : 'Oops ! page not found '
    });
})

module.exports = router;