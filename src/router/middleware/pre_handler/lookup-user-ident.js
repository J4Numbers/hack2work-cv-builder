const config = require('config');
const sessionManager = require('../../../js/session-management').default();

const generateSession = async (req, res) => {
  req.log.debug('User has no session token, or session has expired. Re-creating...');

  let secure = '';
  if (config.get('app.http2.enabled')) {
    secure = 'Secure;';
  }

  const newSession = await sessionManager.generateSession({ toasts: [] });

  res.header('Set-Cookie', `user-session=${newSession}; Max-Age=3600; Domain=${config.get('app.hostname')}; ${secure} HttpOnly; SameSite=Strict`);
  req.log.debug(`Added Set-Cookie header: ${res.header('Set-Cookie')}`);

  return newSession;
};

const lookupUserSession = async (req, res, next) => {
  try {
    if (res.cookies['user-session'] !== '') {
      res.nunjucks.userSession = await sessionManager.getSession(res.cookies['user-session']);
      req.log.debug('Found session object associated with user session');
    } else {
      const newSession = await generateSession(req, res);
      res.nunjucks.userSession = await sessionManager.getSession(newSession);
    }
  } catch (e) {
    req.log.warn(`Unable to lookup user ident :: ${e.message}`);
    const newSession = await generateSession(req, res);
    res.nunjucks.userSession = await sessionManager.getSession(newSession);
  }
  next();
};

module.exports = lookupUserSession;
