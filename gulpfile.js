const gulp = require('gulp')
const sass = require ('gulp-sass')(require('sass'))
// const autoprefixer = require('gulp-autoprefixer')
const autoprefixer = require('autoprefixer')
const browserSync = require('browser-sync').create()
const concat = require('gulp-concat')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const webp = require('gulp-webp');
const svgmin = require('gulp-svgmin');


function browser() {
    browserSync.init({
        // proxy: "aceda.local"
        server: {
            baseDir: './' // Diretório raiz do seu projeto
        }
    })
}

gulp.task('browser-sync', browser)


// functions

function convertWebP() {
    return gulp.src('assets/temp/**/*.+(png|jpg|jpeg)')
        .pipe(webp({ quality: 100, lossless: true, alphaQuality: 100}))
        .pipe(gulp.dest('assets/webp'))
        
}

gulp.task('webp', convertWebP);

  function optimizeSvg() {
    return gulp.src('assets/temp/*.svg')  // Altere o caminho para corresponder aos seus SVGs
    .pipe(svgmin())
    .pipe(gulp.dest('assets/webp/'))  // Altere o caminho para onde você deseja salvar os SVGs otimizados
  }

  gulp.task('optimize-svg', optimizeSvg);




function compilaSass() {

    return gulp.src('scss/*.scss')
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([tailwindcss, autoprefixer]))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('css/'))

    .pipe(browserSync.stream())
}

gulp.task('sass', compilaSass)

function pluginsCSS() {
    return gulp.src('css/lib/*.css')
    .pipe(concat('plugins.css'))
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream())
}

gulp.task('plugincss', pluginsCSS)

function gulpJs() {
    return gulp.src('js/scripts/*.js')
    .pipe(concat('all.js'))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream())

}

gulp.task('alljs', gulpJs)

function pluginsJs() {
    return gulp.src(['./js/lib/aos.min.js', './js/lib/swiper.min.js'])
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest('js/'))
    .pipe(browserSync.stream())

}

gulp.task('pluginjs', pluginsJs)


function watch() {
    //Monitora as atualizações em pastas e arquivos
    gulp.watch('css/lib/*.css', pluginsCSS)
    gulp.watch('assets/*(png|jpg|jpeg)', webp);
    gulp.watch('js/scripts/*.js', gulpJs)
    gulp.watch('js/lib*.js', pluginsJs)
    //serve para atualizar automaticamente o servidor local, com as alterações do html ou php
    gulp.watch('assets/temp/*.**', convertWebP, optimizeSvg).on('add', browserSync.reload)
    gulp.watch(['./tailwind.config.js','scss/*.scss']).on('change', gulp.series(compilaSass, browserSync.reload))
    gulp.watch('*.html', compilaSass).on('change', browserSync.reload);
}

gulp.task('watch', watch)

gulp.task('default', gulp.parallel('watch', 'optimize-svg','browser-sync', 'sass', 'plugincss', 'alljs', 'pluginjs', 'webp' ))

