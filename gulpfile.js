

/**
 * gulpfile
 * @module dotenv
 * @module requireDir
 */

 const dotenv     = require('dotenv');
 const requireDir = require('require-dir');

/**
 * Load environment variables from .env file
 */

dotenv.load();

/**
 * Import all files in gulp directory
 */
 const dir        = requireDir(process.env.GULP_DIR, {recursive: true});
