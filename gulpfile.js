var gulp = require('gulp');
var minifyCss = require("gulp-minify-css");
 
// task
gulp.task('minify-css', function () {
    gulp.src('./css/screen.css') // chemin du fichier
    .pipe(minifyCss())
    .pipe(gulp.dest('build/css-min'));//fichier de destination
});