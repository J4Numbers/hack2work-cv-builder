const sessionManager = require('../../../js/session-management').default();
const cvHandler = require('../../../js/data').default();

const overviewRoutes = require('./overview');

const lookupClaimantUcId = async (req, res, next) => {
  const allUsers = await cvHandler.getUserDetails();
  res.locals.user = allUsers.find((user) => user.role === 'WORK_COACH');
  next();
};

const testUserFound = async (req, res, next) => {
  if (res.locals.user === undefined) {
    const session = await sessionManager.getSession(res.cookies['user-session']);
    session.toasts.push({
      title: 'Warning',
      html: '<h3 class="govuk-notification-banner__heading">Work coach not found</h3><p class="govuk-body">Could not find a work coach within the data set for this journey.</p>',
      toastClasses: 'govuk-notification-banner--warning',
    });
    await sessionManager.overwriteSession(res.cookies['user-session'], session);
    res.redirect(302, '/', next);
  } else {
    next();
  }
};

const updateSession = async (req, res, next) => {
  const session = await sessionManager.getSession(res.cookies['user-session']);
  session.user = {
    ucid: res.locals.user.ucid,
    name: res.locals.user.name,
    role: res.locals.user.role,
  };
  await sessionManager.overwriteSession(res.cookies['user-session'], session);
  next();
};

const redirectOnwards = (req, res, next) => {
  res.redirect(302, '/review/overview', next);
};

module.exports = (server) => {
  overviewRoutes(server);

  server.get('/review', lookupClaimantUcId, testUserFound, updateSession, redirectOnwards);
};
