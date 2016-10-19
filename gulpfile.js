var gulp = require("gulp");

gulp.task('copy-libs', function() {
  return gulp.src([
      'node_modules/core-js/client/shim.min.js',
      'node_modules/zone.js/dist/zone.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/systemjs/dist/system.src.js',

       'node_modules/@angular/core/bundles/core.umd.js',
       'node_modules/@angular/common/bundles/common.umd.js',
       'node_modules/@angular/compiler/bundles/compiler.umd.js',
       'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
       'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
       'node_modules/@angular/http/bundles/http.umd.js',
       'node_modules/@angular/router/bundles/router.umd.js',
       'node_modules/@angular/forms/bundles/forms.umd.js',
       'node_modules/@angular/upgrade/bundles/upgrade.umd.js',

       'node_modules/rxjs/bundles/Rx.js'
    ])
    .pipe(gulp.dest('dist/lib'))
});

gulp.task('copy:assets', function() {
    return gulp.src([
        'app/**/*', 
        '**/*.html',
        '**/*.js',
        '**/*.css',
        '!**/*.ts'
        ], { base : './src' })
    .pipe(gulp.dest('dist'))
});