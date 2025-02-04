const gulp = require('gulp')
const sass = require('gulp-sass')
const concat = require('gulp-concat')
const cleanCSS = require('gulp-clean-css')
sass.compiler = require('dart-sass')
 
gulp.task('scss', () => {
    return gulp.src('./static/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./static/styles'))
})

gulp.task('bundle', () => {
    return gulp.src('./static/styles/**/*.css', { base: './static' })
        .pipe(cleanCSS())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./build'))
})

gulp.task('build', gulp.series('scss', 'bundle'))
 
gulp.task('scss:watch', () => {
    gulp.watch('./static/**/*.scss', gulp.series('scss'))
})