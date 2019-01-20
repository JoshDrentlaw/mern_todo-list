const express = require('express');
const router = express.Router();

const User = require('../../models/User');

// @route  POST user creds
// @desc   Create new user in db
// @access Public
router.post('/', (req, res, next) => {
    if (req.body.email &&
        req.body.username &&
        req.body.password &&
        req.body.passwordConf) {
            const userData = {
                email: req.body.email,
                username: req.body.username,
                password: req.body.password,
                passwordConf: req.body.passwordConf,
            }

            // Use schema.create to insert data into the db
            User.create(userData, (err, user) => {
                if (err) {
                    return next(err);
                }
                else {
                    return res.redirect('/');
                }
            });
        }
});

module.exports = router;