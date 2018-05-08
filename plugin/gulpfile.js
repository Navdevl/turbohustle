const gulp = require('gulp');
// const imagemin = require('gulp-imagemin');
const image = require('gulp-image');

gulp.task('compress', () =>
  gulp.src('../static/img/**/*')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      mozjpeg: true,
      guetzli: false,
      gifsicle: true,
      svgo: true,
      concurrent: 10}))
    .pipe(gulp.dest('../static/img'))
);
