var express = require('express');
var router = express.Router();


router.get('/', require('../services/guard'), function(req, res, next) {
    res.json(req.session);
});

module.exports = router;
