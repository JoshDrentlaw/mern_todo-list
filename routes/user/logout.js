const express = require('express');
const router = express.Router();

router.get('/logout', (req, res, next) => {
    if (req.session) {
        // Delete session object
        req.session.destroy(err => {
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