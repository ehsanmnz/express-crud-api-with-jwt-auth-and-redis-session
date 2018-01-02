let express = require('express');
let router = express.Router();
let Developer = require('../models/Developer');


router.use(require('../services/guard'));


router.get('/', function(req, res, next) {
    Developer.find().paginate(req.query.page, req.query.per).exec().then(
        (developers) => {
            res.json(developers);
        }
    ).catch(
        (err) => {
            res.json({
                error: true
            });
        }
    );
});


router.post('/', function(req, res, next) {
    let d = new Developer(req.body);
    d.save().then(
        (saved) => {
            res.json(saved)
        }
    ).catch(
        (err) => {
            res.json({
                error: true
            });
        }
    );
});


router.get('/:id', function(req, res, next) {
    Developer.findById(req.params.id).then(
        (developer) => {
            res.json(developer);
        }
    ).catch(
        (err) => {
            res.json({
                error: true
            });
        }
    );
});


router.put('/:id', function(req, res, next) {
    Developer.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(
        (developer) => {
            res.json(developer);
        }
    ).catch(
        (err) => {
            res.json({
                error: true
            });
        }
    );
});


router.delete('/:id', function(req, res, next) {
    Developer.findByIdAndRemove(req.params.id).then(
        (developer) => {
            res.json(developer);
        }
    ).catch(
        (err) => {
            res.json({
                error: true
            });
        }
    );
});

module.exports = router;
