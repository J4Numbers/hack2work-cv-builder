const cookieTranslator = (req, res, next) => {
  res.cookies = {};
  const regex = /user-session=([^ ]*)/i;
  const tokenHeader = regex.exec(req.header('cookie'));
  res.cookies['user-session'] = tokenHeader === null
    ? ''
    : tokenHeader[1];
  req.log.debug(`User session cookie for current user is ${res.cookies['user-session']}`);
  next();
};

module.exports = cookieTranslator;
