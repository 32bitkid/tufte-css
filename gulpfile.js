var gulp = require("gulp"),
    source = require('vinyl-source-stream'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function() {
  return gulp.src("src/tufte-css.less")
  .pipe(less())
  .pipe(autoprefixer())
  .pipe(gulp.dest("css"));
});

gulp.task('watch', function() {
  gulp.watch(["src/**/*"], ['css']);
});

gulp.task('default', ['css']);
