module.exports = function (config) {
  config.set({
    // files: config.files.test.unit,

    frameworks: ['jasmine'],

    reporters: ['growl', 'progress', 'beep'],

    browsers: ['Chrome']
  });
};