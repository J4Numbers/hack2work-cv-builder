const Browser = require('zombie');
const sessionManager = require('../../../src/js/session-management').default();

const baseLink = 'http://localhost:8199';

describe('The homepage journey', function () {
  const browser = new Browser();

  it('should render the homepage', function () {
    return sessionManager.generateSession({ toasts: [] })
      .then((sessionToken) => {
        browser.setCookie('user-session', sessionToken);
        return refreshPage(browser, baseLink).then(() => {
          browser.assert.success();
        });
      });
  });
});
