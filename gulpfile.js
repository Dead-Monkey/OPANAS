'use strict';

var gulp = require('gulp'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  gutil = require('gulp-util'),
  ts = require('gulp-typescript'),
  sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function() {
  return gulp.src([
      "node_modules/es6-shim/es6-shim.min.js",
      "node_modules/systemjs/dist/system-polyfills.js",
      "node_modules/angular2/bundles/angular2-polyfills.js",
      "node_modules/rxjs/bundles/Rx.js",
      "node_modules/angular2/bundles/angular2.dev.js"
    ])
    .pipe(concat('main.js'))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(uglify().on('error', gutil.log)) //try without uglify ))
    .pipe(gulp.dest('dist'));
});

gulp.task('scripts:ts', function() {
  var tsProject = ts.createProject('tsconfig.json', {
    outFile: 'bla.js',
    typescript: require('typescript')
  });

  var tsResult = gulp.src('app/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject));

  return tsResult.js
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});
