const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const cleaner = require('gulp-clean');

// JAVASCRIPT
const uglifyJS =  require('gulp-uglify');

// CSS 
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
// const cssGlobbing = require('gulp-css-globbing');
const sassGlob = require('gulp-sass-glob');


// IMAGES
const imagemin = require('gulp-imagemin');


function clean() {
    return gulp.src('./public/*', {read: false})
        .pipe(cleaner());
}

function watchAll()
{
    browserSync.init({
        notify: false,
        open:false,
        server: {
            baseDir: "./"
        }
    });
    
    img();
    buildStyles(); 
    bundleJS();
    gulp.watch('./src/images/**/*', gulp.series(img, browserSync.reload)).on('change', browserSync.reload);
    gulp.watch('./src/**/*.scss',buildStyles).on('change', browserSync.reload);
    gulp.watch('./src/**/*.js', bundleJS).on('change', browserSync.reload);
}

function img() {
    return gulp.src('./src/images/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest('./public/resources/img'));
   };

  
function bundleJS()
{
    return gulp.src('./src/**/*.js')
        .pipe(uglifyJS())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./public/resources/js'));
}
 
function buildStyles() {
    return gulp.src('./src/**/*.scss')               // 1. where is my scss file
      .pipe(sassGlob())                              // 2. pass that file through sass compiler
      .pipe(sass())
      .pipe(autoprefixer())
      .pipe(gulp.dest('./public/resources/css'));   // 3. where do I save the compiled CSS? 
  };

  exports.dev = gulp.series(clean, watchAll);
  exports.build = gulp.series(buildStyles, img, bundleJS, );  
