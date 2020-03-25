const config = require('../flightdeck.manifest.js');
const gulp = require('gulp');
const watch = require('gulp-watch');

gulp.task('watch', function() {
  if (config.tasks.imagemin) {
    watch(config.assets + '/' + config.imagemin.src + '/**/*', function() {
      gulp.start('imagemin', 'svg');
    });
  }
});
