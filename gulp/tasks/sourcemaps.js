/**
 * gulp/tasks/sourcemaps
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
 * Gulp task to generate sourcemaps
 */

 gulp.task('sourcemaps', function(){
   return gulp
           .src(process.env.CSS_DIR + "/**/*.css")
           .pipe($.sourcemaps.init())
           .pipe($.sourcemaps.write())
           .pipe($.cached())
           .pipe(gulp.dest(process.env.CSS_DIR));
 });
