module.exports = function() {
    
    var client = './src/client/';
    var server = './src/server/';
    
    var clientApp = client + 'app/';
    var config = {
        temp: './.tmp/',

        /**
         * Files paths
         */
        alljs: [
            './src/**/*.js',
            './*.js'
        ],
        server: server,
        sass: client + 'components/sass/**/*.scss',
        
         // Node settings
        defaultPort: 7203,
        nodeServer: './src/server/app.js'
    }; // end of config

    return config;
};
