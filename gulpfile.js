/**
 * Created by martynasjankauskas on 08/04/16.
 */
var gulp = require('gulp');
var babel = require("gulp-babel");

gulp.task("default", function () {
    return gulp.src("app")
        .pipe(babel())
        .pipe(gulp.dest("build"));
});