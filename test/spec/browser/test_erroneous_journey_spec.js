const { assert } = require('chai');
const Browser = require('zombie');

const baseLink = 'http://localhost:8199/this-page-does-not-exist';

describe('Erroneous journeys', function () {
  const browser = new Browser();

  it('should render an error page', function () {
    return refreshPage(browser, baseLink)
      .then(() => assert.fail('Expected error was not found'))
      .catch(() => browser.assert.status(404, 'Not found'));
  });
});
