/**
 * Created by martynasjankauskas on 08/04/16.
 */
const mongoose = require('mongoose');
const Movie = require('../models/Movie');

const url = 'mongodb://localhost:27017/IMDB';

mongoose.connect(url);

class MoviesController {

    static getMovies(callback) {
        Movie.find({}, (err, docs) => {
            callback(docs);
        });
    }

    static getMovieById(id, callback) {
        Movie.find({_id: id}, function(err, docs) {
            let result = docs;
            if (docs.length === 0) {
                result = {status: `No documents matched id: ${id}`};
            }
            callback(result);
        })
    }

    static insertMovie(movie, callback) {
        let result = {};

        const newMovie = new Movie(movie);
        newMovie.save( (err, doc) => {
            if (err) {
                result = err;
            } else {
                result.id = doc._id;
                result.status = 'Insert success';
            }
            callback(result);
        });

    }

    static deleteMovie(id, callback) {
        let result = {};
        Movie.remove({_id: id}, (err, doc) => {
            if (err) {
                result = err;
            } else {
                // TODO: doesn't work
                result.status = "Remove success";
                result = doc;
            }
            callback(result);
        })
    }

};

module.exports = MoviesController;