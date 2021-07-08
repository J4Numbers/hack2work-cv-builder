import { expect } from 'chai';
import MemorySessionManager from '../../../../src/ts/session-management/memory-session-manager';

describe('The memory session manager', function () {
  describe('Generating a new session token', function () {
    it('Should generate a new session token on request', function () {
      const sessionManager = new MemorySessionManager();
      return expect(sessionManager.generateSession()).to.eventually.be.a('string');
    });
  });

  describe('Getting a session', function () {
    it('Should throw an error if no session exists to get', function () {
      const sessionManager = new MemorySessionManager();
      return expect(sessionManager.getSession('abc123')).to.eventually.be.rejected;
    });

    it('Should return the session if the session has already been created', function () {
      const sessionManager = new MemorySessionManager();
      return sessionManager.generateSession({ toasts: [] })
        .then(
          (token) => expect(sessionManager.getSession(token))
            .to.eventually.deep.equal({ toasts: [] }),
        );
    });
  });

  describe('Overwriting a session', function () {
    it('Should throw an error if no token exists to be overwritten', function () {
      const sessionManager = new MemorySessionManager();
      return expect(sessionManager.overwriteSession('abc123', {})).to.eventually.be.rejected;
    });

    it('Should overwrite an existing session when provided', function () {
      const sessionManager = new MemorySessionManager();
      const newToast = { toastClasses: 'abc', html: '<p>Hello</p>', title: 'Hello' };
      return sessionManager.generateSession({ toasts: [] })
        .then((token) => sessionManager.getSession(token)
          .then((session) => sessionManager
            .overwriteSession(token, { ...session, toasts: [newToast] })
            .then((updatedToken) => expect(sessionManager.getSession(updatedToken))
              .to.eventually.deep.equal({
                toasts: [newToast],
              }))));
    });
  });
});
