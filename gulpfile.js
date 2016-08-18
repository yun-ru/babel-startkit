var gulp = require('gulp');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var plumber = require('gulp-plumber');

gulp.task("babel", function() {
    gulp.src('src/main.js', { read: false })
        .pipe(plumber())
        .pipe(browserify({
            transform: ["babelify"],
            presets: ["es2015", "react", "stage-0"],
            plugins: ["transform-runtime"]
        }))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('./build'))
});

gulp.task('default', function() {
    gulp.watch('./src/main.js',['babel'])
});