/**
 * Created by martynasjankauskas on 08/04/16.
 */
var express = require('express');
var router = express.Router();

const moviesController = require('../controllers/MoviesController');

// All movies
router.get('/movies', function(req, res, next) {
    moviesController.getMovies(function(items) {
        res.json(items);
    });
});

// Single movie by id
router.get('/movies/:id', function(req, res, next) {
    const id = req.params.id;
    moviesController.getMovieById(id, function(result) {
        res.json(result);
    });
});

// Insert new movie
router.post('/movies', function(req, res, next) {
    moviesController.insertMovie(req.body, function(result) {
        res.json(result);
    });
});

router.delete('/movies/:id', function(req, res) {
    moviesController.deleteMovie(req.params.id, function(result) {
        res.json(result);
    });
});

module.exports = router;
