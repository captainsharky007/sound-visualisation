var gulp        = require('gulp');
var browserSync        = require('browser-sync');
// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// or...

gulp.task('default', function() {
    browserSync.init({
        proxy: "three"
    });
});


gulp.watch("*").on('change', browserSync.reload);
