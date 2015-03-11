var gulp = require('gulp');
var args = require('yargs').argv;
var config = require('./gulp.config')();
var plug = require('gulp-load-plugins')({lazy: true});

gulp.task('vet', function() {
    log('Analyzing source with JSHint and JSCS');

    return gulp
        .src(config.alljs)
        .pipe(plug.if(args.verbose, plug.print()))
        .pipe(plug.jscs())
        .pipe(plug.jshint())
        .pipe(plug.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe(plug.jshint.reporter('fail'));
});

//-------- Messaging function -------------|

function log(msg) {
    if (typeof(msg) === 'object') {
        for (var item in msg) {
            if (msg.hasOwnProperty(item)) {
                plug.util.log(plug.util.colors.blue(msg[item]));
            }
        }
    } else {
        plug.util.log(plug.util.colors.blue(msg));
    }
}
