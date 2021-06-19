const gulp = require('gulp');
const autoPrefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');

const styles = cb=>{
    gulp.src('./app/styles/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoPrefixer('last 2 versions'))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
    cb();
}

const scripts = cb=> {
    gulp.src('./app/scripts/app.js')
        .pipe(gulp.dest('./js'))
    cb();
}

// const bundle = cb=>{
//     gulp.src('./app/scripts/*.js')
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('./js'))
//     cb();
// }


const server = cb =>{
    browserSync.init({
        server: {
            baseDir: './'
        }
    })

    gulp.watch('./app/styles/**/*.scss', styles)
    gulp.watch('./index.html').on('change', browserSync.reload);
    gulp.watch('./app/scripts/**/*.js', scripts).on('change', browserSync.reload)
    cb();
}


exports.style = styles;
exports.js = scripts;
exports.server = gulp.series(server, sass, scripts);