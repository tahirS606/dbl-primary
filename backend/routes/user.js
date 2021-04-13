const express = require("express");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const User = require('../models/user');

const router = express.Router();


router.post("/signup", (req, res, next) => {
    bcrypt.hash(req.body.password, 20).then(hash => {
        const user = new User({
            email: req.body.email,
            password: hash
        });
        user.save()
            .then(result => {
                res.status(201).json({
                    message: 'User Created',
                    result: result
                });
            })
            .catch(err => {
                res.status(500).json({
                    error: err
                })
            })
    })
})

router.post("/login", (req, res, next) => {
    let fetchedUser;
    User.findOne({ email: req.body.email })
        .then(user => {
            console.log(user)
            if (!user) {
                return res.status(401).json({
                    message: 'Auth failed'
                });
            }

            fetchedUser = user;

            return bcrypt.compare(req.body.password, user.password)

        })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: "Auth Failed"
                })

            }
            const token = jtw.sign({ email: fetchedUser.email, userId: fetchedUser._id },
                'secret_this_should_be_longer', {
                    expiresIn: '1h'
                }
            );
            res.status(200).json({
                token: token,
                message: 'token worked'
            })
        })
        .catch(err => {
            return res.status(401).json({
                message: "auth failed"
            })

        })
});


module.exports = router;