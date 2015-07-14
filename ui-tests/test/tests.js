'use strict';

var shoovWebdrivercss = require('shoov-webdrivercss');

// This is an example assuming BrowserStack is used, as the capabilities are
// encoded in the way their system is using.
// See https://www.browserstack.com/automate/node

// This can be executed by passing the environment argument like this:
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=ie11 mocha
// PROVIDER_PREFIX=browserstack SELECTED_CAPS=chrome mocha
var capsConfig = {
    'chrome': {
      'browser' : 'Chrome',
      'browser_version' : '42.0',
      'os' : 'OS X',
      'os_version' : 'Yosemite',
      'resolution' : '1024x768'
  },
  'ie11': {
    'browser' : 'IE',
    'browser_version' : '11.0',
    'os' : 'Windows',
    'os_version' : '7',
    'resolution' : '1024x768'
  }
}

var selectedCaps = process.env.SELECTED_CAPS || undefined;
var caps = selectedCaps ? capsConfig[selectedCaps] : undefined;

var providerPrefix = process.env.PROVIDER_PREFIX ? process.env.PROVIDER_PREFIX + '-' : '';
var testName = selectedCaps ? providerPrefix + selectedCaps : providerPrefix + 'default';

var baseUrl = process.env.BACKEND_URL ? process.env.BACKEND_URL : 'http://localhost/open-edx/www';

describe('Live testing', function() {

  this.timeout(99999999);
  var client = {};

  before(function(done){
    client = shoovWebdrivercss.before(done, caps);
  });

  after(function(done) {
    shoovWebdrivercss.after(done);
  });

  it('should show the home page',function(done) {
    client
      .url(baseUrl)
      .webdrivercss(testName, {
        name: 'homePage',
        remove:
          [
            '.bx-wrapper'
          ]
      }, shoovWebdrivercss.processResults)
      .call(done);
  });

  it('should show the all features roadmap page',function(done) {
    client
      .url(baseUrl + 'about-open-edx')
      .webdrivercss(testName, {
        name: 'about',
        exclude:
          [
            '.stButton_gradient'
          ]
      },
      shoovWebdrivercss.processResults)
      .call(done);
  });
});
