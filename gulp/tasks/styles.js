/**
 * gulp/tasks/styles
 * @module gulp
 * @module runSequence
 */

const
  gulp        = require('gulp'),
  runSequence = require('run-sequence');

/**
 * Gulp task that runs gulp tasks in sequencial order
 */

gulp.task('build:styles', function(cb){
  return runSequence('sass',  'purifycss', 'font-magician', 'cssNext', 'cleanCSS', 'sourcemaps', cb);
});
