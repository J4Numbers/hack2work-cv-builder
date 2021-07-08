const renderer = require('../../../js/renderer/nunjucks-renderer').default();

const renderResponse = (req, res, next) => {
  res.contentType = 'text/html';
  res.header('content-type', 'text-html');
  res.send(200, renderer.render('pages/referral/overview.njk', {
    ...res.nunjucks,
    ...res.locals.render,
  }));

  next();
};

module.exports = (server) => {
  server.get('/referral/overview', renderResponse);
};
