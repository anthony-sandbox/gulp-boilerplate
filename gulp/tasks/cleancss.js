/**
 * run/task/cleancss
 * @module gulp
 * @module $
 * @module cleanCSS
 * @module dotenv
 */

/**
 * Module dependencies
 */

const
  gulp      = require('gulp'),
  $         = require('gulp-load-plugins')({"pattern" : ["*"]}),
  cleanCSS  = require('gulp-cleancss')
  dotenv    = require('dotenv');

  /**
   * load .env file in root directory
   */
  dotenv.load();

/**
 * Gulp task to minimize css file(s)
 */

gulp.task('cleanCSS', function(){
    return gulp
            .src(process.env.CSS_DIR + "/**/*.css")
            .pipe($.cleancss())
            .pipe($.cached())
            .pipe(gulp.dest(process.env.CSS_DIR));
});
