var config = require('./build.config.js');

exports.config = {
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },

  specs: [
    config.files.test.e2e
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:' + config.port
};