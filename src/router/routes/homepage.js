const renderer = require('../../js/renderer/nunjucks-renderer').default();
const cvHandler = require('../../js/data').default();

const getAllUsers = async (req, res, next) => {
  const userList = await cvHandler.getUserDetails();
  res.locals.render = {
    users: userList,
  };
  next();
};

const renderResponse = (req, res, next) => {
  res.contentType = 'text/html';
  res.header('content-type', 'text-html');
  res.send(200, renderer.render('pages/homepage.njk', {
    ...res.nunjucks,
    ...res.locals.render,
  }));

  next();
};

module.exports = (server) => {
  server.get('/', getAllUsers, renderResponse);
};
