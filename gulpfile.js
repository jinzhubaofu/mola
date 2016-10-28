/**
 * @file gulpfile
 * @author leon <ludafa@outlook.com>
 */

/* eslint-disable fecs-no-require */

const gulp = require('gulp');
const babel = require('gulp-babel');
const babelOptions = require('./package.json').babelBuild || {};
const babelHelpers = require('gulp-babel-external-helpers');

const sourcemaps = require('gulp-sourcemaps');
const stylus = require('gulp-stylus');
const nib = require('nib');

gulp.task('babel', function () {
    return gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel(babelOptions))
        .pipe(babelHelpers('babelHelpers.js', 'umd'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('lib'));
});

gulp.task('stylus', function () {
    return gulp.src('src/**/*.styl')
        .pipe(
            stylus({
                compress: false,
                use: [nib()]
            })
        )
        .pipe(gulp.dest('lib'));
});

gulp.task('build', ['babel', 'stylus']);

gulp.task('default', ['build']);
