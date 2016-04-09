/**
 * Created by martynasjankauskas on 08/04/16.
 */
var express = require('express');
var router = express.Router();

const moviesController = require('../controllers/moviesController');

router.get('/movies', function(req, res, next) {
    moviesController.getMovies(function(items) {
        res.json(items);
    });
});

router.get('/movies/:id', function(req, res, next) {
    const id = req.params.id;
    moviesController.getMovieById(id, function(item) {
        res.json(item);
    });
});

router.post('/movies', function(req, res, next) {
    moviesController.insertMovie(req.body, function(result) {
        res.json(result);
    });
});

module.exports = router;
