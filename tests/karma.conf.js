module.exports = function (config) {
  config.set({
    frameworks: ['jasmine', 'webpack'],
    files: [
      { pattern: 'src/*.js', type: 'module' },
      { pattern: 'specs/*.spec.js', type: 'module' }
    ],
    preprocessors: {
      'src/*.js': ['webpack'],
      'specs/*.spec.js': ['webpack']
    },
    webpack: {
      mode: 'development'
    },
    browsers: ['ChromeHeadless'],
    reporters: ['progress'],
    singleRun: true
  });
};
