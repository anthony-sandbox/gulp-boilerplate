/**
 * gulp/tasks/replace
 * @module gulp
 * @module $
 * @module dotenv
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
 * Gulp task to replace strings
 */

 gulp.task('replace', function(){
   return gulp
           .src(process.env.SRC_CSS_DIR + "/**/*.css")
           .pipe($.replace('@charset "UTF-8";', ''))
           .pipe($.cached())
           .pipe(gulp.dest(process.env.SRC_CSS_DIR));
 });
