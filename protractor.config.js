exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  onPrepare: function() {
    var SpecReporter = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
  },

  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['website/test/protractor_tests/**/*.spec.js'],

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  },

};
