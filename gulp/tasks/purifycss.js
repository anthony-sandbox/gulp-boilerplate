/**
 * gulp/tasks/purifycss
 * @module gulp
 * @module $
 * @module dotenv
 */

 /**
  * Module dependencies
  */

  const
    gulp    = require('gulp'),
    $       = require('gulp-load-plugins')({"pattern" : ["*"]}),
    dotenv  = require('dotenv');

 /**
  * load .env file in root directory
  */

 dotenv.load();

/**
 * Gulp task to remove unused css rules from file
 */

 gulp.task('purifycss', function(){
   return gulp
           .src(process.env.CSS_DIR + "/**/*.css")
           .pipe($.purifycss(['index.html']))
           .pipe($.cached())
           .pipe(gulp.dest(process.env.CSS_DIR));
 });
