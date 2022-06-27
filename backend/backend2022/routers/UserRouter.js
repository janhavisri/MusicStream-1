const express = require("express");
const router = express.Router();
const Model = require("../models/UserModel");

router.get("/home", (req, res) => {
    console.log("request at user home");
    res.send("response from user home");
});

router.post("/add", (req, res) => {
    console.log(req.body);

    // for storing data in database
    new Model(req.body)
        .save()
        .then((data) => {
            console.log("user saved!");
            res.status(200).json({ message: "success" });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
});

router.post("/authenticate", (req, res) => {
    const values = req.body;

    console.log(values);
    Model.findOne({ email: values.email, password: values.password })
        .then((data) => {
            if (data) {
                console.log("login success");
                res.status(200).json(data);
            } else {
                console.log("login failed");
                res.status(400).json({ message: "failed" });
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
});
router.get('/getbyemail/:email', (req, res) => {

    Model.findOne({ email: req.params.email })
        .then((data) => {
            console.log('User Data fetched by email');
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.get("/getall", (req, res) => {
    Model.find({})
        .then((data) => {
            console.log("user data fetched!");
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
});

router.delete("/delete/:id", (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((data) => {
            console.log("user data deleted!");
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
});

router.put("/update/:id", (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => {
            console.log("user data updated!");
            res.status(200).json(data);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
});

module.exports = router;