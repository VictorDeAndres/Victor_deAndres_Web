var gulp = require('gulp'),
  del = require('del'),
  dest = require('gulp-dest'),
  minifyCss = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  useref = require('gulp-useref');

var myDist = ['./dist/*.html', './dist/css/*', './dist/fonts/*', './dist/images/*', './dist/js/*', './dist/lib/*'];

gulp.task('clean', function () {
  return del('./dist/*/*');
});

gulp.task('updateUseRef', function () {
  var assets = useref.assets();
  return gulp.src('./app/index.html')
      .pipe(assets)
      .pipe(assets.restore())
      .pipe(useref())
      .pipe(gulp.dest('./dist'));
});

gulp.task('css', ['updateUseRef'], function () {
  return gulp.src('./dist/css/*')
    .pipe(minifyCss())
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('javascript', ['updateUseRef'], function () {
  return gulp.src('./dist/js/*')
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('library', ['updateUseRef'], function () {
  return gulp.src('./dist/lib/*')
    .pipe(uglify())  
    .pipe(gulp.dest('./dist/lib'));
});

gulp.task('fonts', function () {
  return gulp.src(['./app/fonts/*.{ttf,otf}', './app/bower_components/bootstrap/fonts/*.{eot,svg,ttf,woff,woff2}'])
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('images', function () {
  return gulp.src('./app/images/*')
    .pipe(gulp.dest('./dist/images'));
});


gulp.task('build', ['clean', 'css', 'javascript', 'library', 'images', 'fonts' ]);

