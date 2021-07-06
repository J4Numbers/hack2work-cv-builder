module.exports = {
  app: {
    http2: {
      enabled: false,
      key: 'certs/localhost-privkey.pem',
      cert: 'certs/localhost-cert.pem',
    },
    name: 'template',
    hostname: 'localhost',
    port: 8199,
  },
  banner: {
    phrase: 'Internal',
    feedback_link: 'https://github.com/dwp',
  },
  nunjucks: {
    options: {},
  },
  logger: {
    level: 'debug',
  },
};
