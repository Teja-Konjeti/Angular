var gulp = require("gulp");

gulp.task('copy-libs', function() {
  return gulp.src([
      'node_modules/core-js/client/shim.min.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/reflect-metadata/Reflect.js'
    ])
    .pipe(gulp.dest('dist/js'))
});

gulp.task('copy-assets', function() {
    return gulp.src([
        'index.html',
        'styles.css',
        'app/**/*.html',
        'app/**/*.css'
        ], { base : './' })
    .pipe(gulp.dest('dist'))
});

gulp.task('default', ['copy-libs', 'copy-assets']);

gulp.task('build', ['copy-libs', 'copy-assets']);