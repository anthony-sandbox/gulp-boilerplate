/**
 * gulp/tasks/font-magician
 * @module gulp
 * @module $
 * @module dotenv
 * @type { object } processors
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
 * postcss processors
 */

 const processors = [
   $.postcssFontMagician
 ]

/**
 * Gulp task to download fonts on the fly
 */

 gulp.task('font-magician', function(){
   return gulp
           .src(process.env.CSS_DIR + "/**/*.css")
           .pipe($.postcss(processors))
           .pipe($.cached())
           .pipe(gulp.dest(process.env.CSS_DIR));
 });
