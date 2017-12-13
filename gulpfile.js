var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('scripts', function() {
    gulp.src([
            'node_modules/jquery/dist/jquery.slim.min.js',
            'node_modules/popper.js/dist/popper.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js'
        ])
        .pipe(concat('vendor.min.js'))
        .pipe(gulp.dest('./public/js'));
});

gulp.task('styles', function() {
    gulp.src([
        'node_modules/bootstrap/dist/css/bootstrap.min.css'
    ])
        .pipe(concat('vendor.min.css'))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('default', ['scripts', 'styles'], function() {
});
