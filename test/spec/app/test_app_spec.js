const sessionManager = require('../../../src/js/session-management').default();

describe('The application over HTTP', function () {
  after(function () {
    stopMockRequire('config');
  });

  describe('Homepage', function () {
    it('Should return a copy of the homepage on request', function () {
      return sessionManager.generateSession({ toasts: [] })
        .then((sessionToken) => request(server())
          .get('/')
          .set('cookie', `user-session=${sessionToken}`)
          .then((response) => {
            expect(response).to.have.status(200);
            expect(response).to.be.html;
          }));
    });
  });

  describe('Error pages', function () {
    it('Should return a 404 if the page does not exist', function () {
      return request(server())
        .get('/this-page-does-not-exist')
        .then((response) => {
          expect(response).to.have.status(404);
          expect(response).to.be.html;
        });
    });
  });
});
