var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');

var path = require('path');

var paths = {
    es6: ['es6.lib/**/*.js'],
    es5: 'lib',
    // Must be absolute or relative to source map
    sourceRoot: path.join(__dirname, 'es6.lib'),
};
gulp.task('build', function () {
    return gulp.src(paths.es6)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(sourcemaps.write('.', { sourceRoot: paths.sourceRoot }))
        .pipe(plumber.stop())
        .pipe(gulp.dest(paths.es5));
});
gulp.task('watch', function() {
    gulp.watch(paths.es6, ['build']);
});
gulp.task('default', ['watch']);
