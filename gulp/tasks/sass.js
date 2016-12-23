
/**
 * gulp/tasks/sass
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
   * Gulp task that parses sass file(s) to css
   */
  gulp.task('sass', function(){
    return gulp
            .src(process.env.SASS_DIR + "/style.scss")
            .pipe($.sass().on('error', $.sass.logError))
            .pipe($.cached())
            .pipe(gulp.dest(process.env.CSS_DIR));
  });
