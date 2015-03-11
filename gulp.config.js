module.exports = function() {
    var client = './src/client/';

    var config = {
        temp: './.tmp/',

        /**
         * Files paths
         */
        alljs: [
            './src/**/*.js',
            './*.js'
        ],

        sass: client + 'components/sass/**/*.scss'
    };

    return config;
};
