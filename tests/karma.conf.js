module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'webpack'],
    files: ['test/**/*.spec.js'],
    preprocessors: {
      'test/**/*.spec.js': ['webpack']
    },
    webpack: { mode: 'development' },
    browsers: ['ChromeHeadless'],
    reporters: ['progress'],
    singleRun: true
  });
};
