var gulp = require('gulp');
var del = require('del');


var requireDir = require('require-dir');
var dir = requireDir('./gulp tasks');

gulp.task('clean', function () {
    del.sync(['build/*']);
});

gulp.task('watch', ['clean', 'build'], function () {
    gulp.watch(['*.html', 'app/**/*.html', 'app/**/*.js'], ['build'
    ]);
});

gulp.task('default', ['build']);