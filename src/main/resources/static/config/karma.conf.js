module.exports = function(config) {

    var configuration = {

        basePath: '../',

        frameworks: ['jasmine'],

        files: [
            // Polyfills.
            'node_modules/es6-shim/es6-shim.js',

            'node_modules/reflect-metadata/Reflect.js',

            // System.js for module loading
            'node_modules/systemjs/dist/system-polyfills.js',
            'node_modules/systemjs/dist/system.src.js',

            // Zone.js dependencies
            'node_modules/zone.js/dist/zone.js',
            'node_modules/zone.js/dist/proxy.js',
            'node_modules/zone.js/dist/sync-test.js',
            'node_modules/zone.js/dist/jasmine-patch.js',
            'node_modules/zone.js/dist/async-test.js',
            'node_modules/zone.js/dist/fake-async-test.js',

            // RxJs.
            {
                pattern: 'node_modules/rxjs/**/*.js',
                included: false,
                watched: false
            }, {
                pattern: 'node_modules/rxjs/**/*.js.map',
                included: false,
                watched: false
            },

            {
                pattern: 'systemjs.config.js',
                included: false,
                watched: false
            }, {
                pattern: 'config/karma-test-shim.js',
                included: true,
                watched: true
            },

            // paths loaded via module imports
            // Angular itself
            // Angular 2 itself and the testing library

            {
                pattern: 'node_modules/@angular/**/*.js',
                included: false,
                watched: false
            }, {
                pattern: 'node_modules/@angular/**/*.js.map',
                included: false,
                watched: false
            },

            // Our built application and test code
            {
                pattern: 'app/**/*.js',
                included: false,
                watched: true
            }, {
                pattern: 'test/**/*.js',
                included: false,
                watched: true
            },

            // paths to support debugging with source maps in dev tools
            {
                pattern: 'app/**/*.ts',
                included: false,
                watched: false
            }, {
                pattern: 'app/**/*.js.map',
                included: false,
                watched: false
            }, {
                pattern: 'test/**/*.ts',
                included: false,
                watched: false
            }, {
                pattern: 'test/**/*.js.map',
                included: false,
                watched: false
            }
        ],



        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: true,
        customLaunchers: {
            Chrome_travis_ci: {
                base: 'Chrome',
                flags: ['--no-sandbox']
            }
        }
    };
    if (process.env.TRAVIS) {
        configuration.browsers = ['Chrome_travis_ci'];
    }
    config.set(configuration);

}
