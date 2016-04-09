/**
 * Created by martynasjankauskas on 08/04/16.
 */
const mongojs = require('mongojs');

var db = mongojs('mongodb://localhost:27017/IMDB');
var movies = db.collection('movies');

const moviesController = {

    getMovies(callback) {
        movies.find((function(err, items) {
            callback(items);
        }));
    },

    getMovieById(id, callback) {
        movies.find({_id: mongojs.ObjectID(id)}, function(err, item) {
            callback(item);
        })
    },

    insertMovie(movie, callback) {
        // some dumb check
        const result = {
        };

        if (movie.year > 1990) {
            result.status = 'Error';
            result.reason = 'year invalid';
            return callback(result);
        }

        movies.insert(movie, function(err, result) {
            if (err) {
                throw new Error(err);
            }
            return callback(result);
        });
    }

};

module.exports = moviesController;