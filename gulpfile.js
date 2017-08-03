const gulp = require('gulp');
var $ = require('gulp-load-plugins')({rename: {'gulp-rev-delete-original':'revdel', 'gulp-if': 'if'}});

var phpMinify = require('@aquafadas/gulp-php-minify');

/* Tasks base */
gulp.task('copy', ['clean'], function() {
    return gulp.src(['./src/**/*', './src/.htaccess'], {base: 'src'})
    .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', function() {
    return gulp.src('./dist/', {read: false})
    .pipe($.clean());
});


/* Minificação */
gulp.task('minify-js', function() {
  return gulp.src('./dist/assets/js/*.js')
  .pipe($.uglify())
  .pipe(gulp.dest('./dist/assets/js/'))
});

gulp.task('minify-css', function() {
  return gulp.src('./dist/assets/css/*.css')
  .pipe($.cssnano({safe: true}))
  .pipe(gulp.dest('./dist/assets/css/'))
});

gulp.task('minify-html', function() {
    return gulp.src('./dist/*.html')
    .pipe($.htmlmin({collapseWhitespace: true, comments:true, spare:true}))
    .pipe(gulp.dest('./dist/'))
});

/* Concatenação */
gulp.task('usemin', function() {
    return gulp.src('./dist/index.html')
    .pipe($.usemin({
       /*html: [
        // $.htmlmin({ collapseWhitespace: true }),
        // phpMinify({silent: true, binary: 'C:\\xampp\\php\\php.exe', mode: 'fast'})
        ],*/
        inlinecss: [ $.cssnano({safe: true}) ],
        inlinejs: [ $.uglify() ]
    }))
    .pipe(gulp.dest('./dist/'));
});

/* Imagens */
gulp.task('imagemin', function() {
    return gulp.src('./dist/assets/imagens/**/*')
    .pipe($.imagemin({
        progressive: true,
        optimizationLevel: 7,
        svgoPlugins: [
        {removeViewBox: false},
        {cleanupIDs: false}
        ]
    }))
    .pipe(gulp.dest('./dist/assets/imagens/'));
});

/* Revisão de arquivos */
gulp.task('rev', function(){
  return gulp.src(['./dist/**/*.{css,js,jpg,jpeg,png,svg}'])
  .pipe($.rev())
  .pipe($.revdel())
  .pipe(gulp.dest('./dist/'))
  .pipe($.rev.manifest())
  .pipe(gulp.dest('./dist/'))
})

gulp.task('revall', ['rev'], function(){
    return gulp.src(['dist/**/*.{css,js,jpg,jpeg,png,svg}'])
    .pipe($.revAll.revision({
        includeFilesInManifest: ['.html', '.js', '.css',],
      dontRenameFile: ['.*/.*\.html']
  }))
    .pipe($.revdel())
    .pipe(gulp.dest('dist/'))
});


/* Alias */
gulp.task('minify', ['minify-js', 'minify-css', 'minify-html']);
gulp.task('build', $.sequence(['imagemin', 'usemin'])); // , 'revall'
gulp.task('default', $.sequence('copy', 'minify', 'build'));
