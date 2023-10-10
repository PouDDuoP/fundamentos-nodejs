// Gulp es una herramienta utilizada para automatizar procesos.
const gulp = require('gulp');
const server = require('gulp-server-livereload');

// es asincrono 
gulp.task('build', function(callback) {
  console.log('Constuyendo el sitio');
  setTimeout(callback, 1500);
});

gulp.task('serve', function(callback) {
  gulp.src('www')
    .pipe(server({
      livereload: true,
      open: true,
    }));
})

gulp.task('default', gulp.series('build', 'serve'));