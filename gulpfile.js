import gulp from 'gulp';
import gulpIgnore from 'gulp-ignore';
import htmlmin from 'gulp-htmlmin';
import replace from 'gulp-replace';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import concat from 'gulp-concat';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import wrapper from 'gulp-wrapper';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import { existsSync, rename, rmSync } from 'node:fs';

const { src, dest, watch, series } = gulp,
      sass                         = gulpSass(dartSass),
      { init, write }              = sourcemaps;


const filesPaths = {

    images: {
        src    : 'src/client/media/images/**/*',
        dest   : 'build/images/',
        debug  : 'debug/images/',
        exclude: 'src/client/media/images/icons/icon-512.png',
    },

    pwa   : {
        src   : 'src/client/pwa/',
        dest  : 'build/',
        debug : 'debug/',
    },

    html  : {
        src   : 'src/client/views/**/*.html',
        dest  : 'build/',
        debug : 'debug/',
    },

    sass  : {
        src : 'src/client/styles/sass/',
        dest: 'src/client/styles/css/',
    },

    css   : {
        src   : 'src/client/styles/css/',
        dest  : 'build/css/',
        debug : 'debug/css/',
    },

    js    : {
        src   : 'src/client/scripts/',
        dest  : 'build/js/',
        debug : 'debug/js/',
    }
};


const jsFiles = [
    filesPaths.js.src + 'app.js',
    filesPaths.js.src + 'home.js',
    filesPaths.js.src + 'portfolioCarousel.js',
];


// Move Progressive Web App files, compile and minify if needed
function pwaTask() {

    const manifest = src(filesPaths.pwa.src + 'manifest.json')
        .pipe(dest(filesPaths.pwa.dest));

    const sw = src(filesPaths.pwa.src + 'sw.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(dest(filesPaths.pwa.dest))
        .pipe(dest(filesPaths.pwa.debug));

    return(manifest, sw);
}


// Optimize and convert images to webp
function imageTask() {

    return src(filesPaths.images.src)
            .pipe(imagemin())
            .pipe(gulpIgnore.exclude(filesPaths.images.exclude))
            .pipe(webp())
            .pipe(dest(filesPaths.images.dest))
            .pipe(dest(filesPaths.images.debug));
}


// Minify html
function htmlTask() {

    return src(filesPaths.html.src)
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(dest(filesPaths.html.debug))
        // Pretty URLs for production release
        .pipe(replace('index.html', ''))
        .pipe(replace('.html', ''))
        .pipe(dest(filesPaths.html.dest));
}


// Rename production folder subdirectories
function dirTask(cb) {

    function renameDir(dirName, newDirName) {

        if(existsSync(newDirName)) {

            rmSync(newDirName, { recursive: true, force: true });
        }

        rename(dirName, newDirName, function(err) {

            if (err) throw err;
        });
    }

    renameDir('build/pages/', 'build/p');
    renameDir('build/ar/pages/', 'build/ar/p');
    renameDir('debug/pages/', 'debug/p');
    renameDir('debug/ar/pages/', 'debug/ar/p');
    cb();
}


// Compile scss, then prefix and minify css
function cssTask() {

    return src(filesPaths.sass.src + '*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(init())
        .pipe(autoprefixer('last 2 version'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(write('.'))
        .pipe(dest(filesPaths.css.dest))
        .pipe(dest(filesPaths.css.debug));
}


// Define a function to concat, edit, compile and minify js
function jsFileProd(srcFilesPaths, destFileName) {

    return src(srcFilesPaths)
        .pipe(init())
        .pipe(concat(destFileName))
        .pipe(wrapper({
            header: 'document.addEventListener(\'DOMContentLoaded\', () => {\'use strict\';',
            footer: '});'
         }))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(write('.'))
        .pipe(dest(filesPaths.js.dest))
        .pipe(dest(filesPaths.js.debug));
}


// Implement and call js function
function jsTask() {

    const homePage = jsFileProd(jsFiles, 'main.js');

    const appBase = jsFileProd(jsFiles[0], 'app.js');

    return (homePage, appBase);
}


// Watch task
function watchTask() {

    watch([
        filesPaths.pwa.src + '*.*',
        filesPaths.images.src,
        filesPaths.html.src,
        filesPaths.sass.src + '**/*.scss',
        filesPaths.js.src + '*.js',
    ],
        series(pwaTask, imageTask, htmlTask, dirTask, cssTask, jsTask));
}


// Default Gulp task
export default watchTask;