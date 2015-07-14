# Installation

1. Login to [Shoov](http://shoov.io) and copy/ paste the code from on the `My account` page, in order to get your access token
1. Fork this repo, and clone it
1. Install mocha globally ``npm install -g mocha``
1. Follow [installation](https://github.com/webdriverio/webdrivercss#install) notes for WebdriverCss
1. ``cd test-example && npm install``

## Providers

For local testing use phantomJs ``phantomjs --webdriver=4444``

Otherwise you can use BrowserStack or Sauce Labs:

```bash
# Set BrowserStack keys
export BROWSERSTACK_USERNAME=<username>
export BROWSERSTACK_KEY=<token>
```

OR

```bash
# Set Suace Labs keys
export SAUCE_USERNAME=<username>
export SAUCE_ACCESS_KEY=<token>
```

After a regression was found check your [Builds](http://shoov.gizra.com/#/builds) page, or go directly to the link indicated by the failing Mocha test.

# Credits

[Gizra](http://gizra.com)
