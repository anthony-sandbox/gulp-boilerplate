/**
 * gulp/tasks/cssnext
 * @module gulp
 * @module $
 * @module cssnext
 * @module dotenv
 * @type { object } processors
 */

  const
    gulp    = require('gulp'),
    $       = require('gulp-load-plugins')({"pattern" : ["*"]}),
    cssnext = require('postcss-cssnext'),
    dotenv  = require('dotenv');

 /**
  * load .env file in root directory
  */

 dotenv.load();

/**
 * postcss processors
 */

 const processors = [
   cssnext({browsers: ['last 1 version']})
 ]

/**
 * Gulp task to remove unused css rules from file
 */

 gulp.task('cssNext', function(){
   return gulp
           .src(process.env.CSS_DIR + "/**/*.css")
           .pipe($.postcss(processors))
           .pipe($.cached())
           .pipe(gulp.dest(process.env.CSS_DIR));
 });
