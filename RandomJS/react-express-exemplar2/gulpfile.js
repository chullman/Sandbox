
//GULP is essentiall as it will convert our jsx into browser consumable javascript
// GULP can automate many build tasks and add them to the pipeline
// In our case, it will allow us to automate our server from within our gulpfile

// npm install -g gulp
// npm install --save gulp gulp-live-server
// npm install --save browser-sync

const gulp = require('gulp');

const LiveServer = require('gulp-live-server');

const browserSync = require('browser-sync');

const browserify = require('browserify');
const reactify = require('reactify');

// vinyl-source-stream will take data from a format that is used by gulp, to a format that can be used by a normal static server such as express
const source = require('vinyl-source-stream');

// Create a new Gulp task

gulp.task('live-server', function() {
  let server = new LiveServer('server/main.js')
  server.start();
})

// Browserify is going to grab main.jsx, if it requires any files inside, it will grab that too
// Next it takes all that information, and turns it into JS using Reactify transform
gulp.task('bundle', function() {
  return browserify({
    entries:'app/main.jsx',
    debug: true,
  })
  .transform(reactify)
  .bundle() // wraps up the transformations and tells browserify that we're ready to output our file
  .pipe(source('app.js')) // main.js is BEFORE transformations and app.js is AFTER transformations
  .pipe(gulp.dest('.tmp'));
})

// make serve dependent on live-server
gulp.task('serve', ['bundle', 'live-server'], function() {
  browserSync.init(null, { // pass in null because we already have our server running
    proxy:"http://localhost:7777",
    port: 9001
  })
})
