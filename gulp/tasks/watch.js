/**
 * gulp/tasks/watch
 * @module gulp
 * @module dotenv
 */


const gulp    = require('gulp');
const dotenv  = require('dotenv');

/**
 * watch task
 */

gulp.task('watch', function(){
  gulp.watch(process.env.SCSS + "/**/*.scss", ['build:styles']);
});
