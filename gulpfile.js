const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// Nhiệm vụ minify CSS
function minifyCSS() {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'));
}

// Nhiệm vụ minify JS
function minifyJS() {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/js'));
}

// Nhiệm vụ theo dõi
function watchFiles() {
  gulp.watch('src/css/*.css', minifyCSS);
  gulp.watch('src/js/*.js', minifyJS);
}

exports.default = gulp.parallel(watchFiles, minifyCSS, minifyJS);
