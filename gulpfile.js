var gulp = require('gulp');
var args = require('yargs').argv;
var del = require('del');
var config = require('./gulp.config')();
var plug = require('gulp-load-plugins')({lazy: true});
var port = process.env.PORT || config.defaultPort;

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


gulp.task('styles', ['clean-styles'],function() {
    log('Compiling Sass to CSS');

    return gulp
        .src(config.sass)
        .pipe(plug.plumber({
            errorHandler: function (error) {
                log(error.message);
                this.emit('end');
            }}))
        .pipe(plug.compass({
            css: './src/client/styles',
            sass: './src/client/components/sass',
            image: './src/client/images'
        }))
        .pipe(plug.autoprefixer({browsers: ['last 2 version', '> 5%']}))
        .on('error', function(err) {
        // Would like to catch the error here 
    })
//    .pipe(plug.minifyCSS())
    .pipe(gulp.dest(config.temp));
});

gulp.task('clean-styles', function(finito){
    var files = config.temp + '**/*.css';
    clean(files, finito);
});

//-------- Cleaning Function -------------|
function clean(path, finito) {
    log('Cleaning up ' + plug.util.colors.blue(path));
    del(path, finito);
}


//----------------- Watch Functions --------|

// Watching Sass
gulp.task('watching-sass', function(){
    gulp.watch([config.sass], ['styles']);
});

//-------------- Server ----------------------|

gulp.task('serve-dev', function() {
    var isDev = true;

    var nodeOptions = {
        script: config.nodeServer,
        delayTime: 1,
        env: {
            'PORT': port,
            'NODE_ENV': isDev ? 'dev' : 'build'
        },
        watch: [config.server]
    };

    return plug.nodemon(nodeOptions);
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
