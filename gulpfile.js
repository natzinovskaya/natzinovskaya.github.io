const gulp = require('gulp');
const sass = require('gulp-sass');
const image = require('gulp-image');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('image', function () {
    gulp.src('./images/*')
        .pipe(image())
        .pipe(gulp.dest('./build/images'))
});

gulp.task('sass', function () {
    return gulp.src('./styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
        }))
        .pipe(gulp.dest('./build/styles/'));
});


gulp.task('fonts', function () {
    return gulp.src('./fonts/*')
        .pipe(gulp.dest('./build/fonts'));
});

gulp.task('watch', ['sass', 'image', 'fonts'], function () {
    gulp.watch('styles/*.scss', ['sass']);
    gulp.watch('images/*', ['image']);
    gulp.watch('fonts/*', ['fonts']);
});

gulp.task('default', ['watch', 'fonts', 'image']);
