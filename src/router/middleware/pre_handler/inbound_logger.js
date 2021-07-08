const inboundLogger = (req, res, next) => {
  req.log.info(`${req.id} :: found new ${req.method} request to ${req.getPath()}`);
  next();
};

module.exports = inboundLogger;
