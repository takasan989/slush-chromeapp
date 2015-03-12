var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var paths = {
  appFiles: ['manifest.json', 'background.js', 'app/**']
};

gulp.task('zip', function () {
  var manifest = require('./manifest.json');

  return gulp.src(paths.appFiles, { base: '.' })
    .pipe($.zip('<%= appName %>-' + manifest.version + '.zip'))
    .pipe(gulp.dest('package'));
});
