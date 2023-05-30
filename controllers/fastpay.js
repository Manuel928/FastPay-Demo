const express = require('express');
const mongoose = require('mongoose')

const router = express.Router()
const FastPayModel = mongoose.model("FastPay")

router.get("/contact", (req, res) => {
    res.render("contact", {})
});

router.get("/payment", (req, res) => {
    res.render("payment", {})
})

router.post("/contact-us", (req, res) => {
    console.log(req.body);

    // res.render("payment", {})
    var fastpay = new FastPayModel;
    fastpay.name = req.body.name;
    fastpay.email = req.body.email;
    fastpay.subject = req.body.subject;
    fastpay.message = req.body.message;
    fastpay.save((err, doc) => {
        if (!err) {
            res.redirect("/success")
        }
        else {
            console.log(err);
            res.redirect("/fail")
        }
    })
});

router.post("/payment", (req, res) => {
    console.log(req.body);

    // res.render("payment", {})
    var fastpay = new FastPayModel;
    fastpay.first_name = req.body.first_name;
    fastpay.last_name = req.body.last_name;
    fastpay.email = req.body.email;
    fastpay.phoneNumber = req.body.phoneNumber;
    fastpay.networkProvider = req.body.networkProvider;
    fastpay.Amount = req.body.Amount;
    fastpay.submit = req.body.submit;
    fastpay.save((err, doc) => {
        if (!err) {
            res.redirect("/success")
        }
        else {
            console.log(err);
            res.redirect("/fail")
        }
    })
});



module.exports = router;