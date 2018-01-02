let express = require('express');
let router = express.Router();
let User = require("../models/User");

router.post('/register', function(req, res) {
    if (!req.body.username || !req.body.password) {
        res.json({success: false, msg: 'Please pass username and password.'});
    } else {
        let newUser = new User({
            username: req.body.username,
            password: req.body.password
        });
        newUser.save(function(err) {
            if (err) {
                return res.json({success: false, msg: 'Username already exists.'});
            }
            res.json({success: true, msg: 'Successful created new user.'});
        });
    }
});

router.post('/login', function(req, res) {
    User.findOne({
        username: req.body.username
    }, function(err, user) {
        if (err) throw err;

        if (!user) {
            res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
        } else {
            user.comparePassword(req.body.password, function (err, isMatch) {
                if (isMatch && !err) {
                    req.session.user = user.toJSON();

                    var claims = {
                        iss: "Application Name",
                        aud: "mianei.ir"
                    };

                    req.session.create(claims, function(error, token){

                        res.json({ token: token });

                    });
                } else {
                    res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
                }
            });
        }
    });
});

router.get('/logout', (req, res) => {

    req.session.destroy(
        (err) => {
            res.json({
                msg: "successfully logged out"
            });
        }
    );
});

module.exports = router;