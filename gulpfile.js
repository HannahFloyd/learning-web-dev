const { watch, src } = require('gulp');
const livereload = require('gulp-livereload');

exports.default = function() {
  livereload({ start: true })

  watch('*.css', (cb) => {
    livereload.reload();
    cb();
  });

  watch('*.html', (cb) => {
    livereload.reload();
    cb();
  });
};