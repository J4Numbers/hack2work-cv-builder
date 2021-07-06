module.exports = {
  app: {
    http2: {
      enabled: false,
      ca: undefined,
      key: '/path/to/key/file',
      cert: '/path/to/cert/file',
    },
    name: 'template',
    hostname: 'localhost',
    port: 8000,
  },
  banner: {
    phrase: 'Internal',
    feedback_link: 'https://github.com/dwp/',
  },
  nunjucks: {
    options: {},
  },
  logger: {
    level: 'debug',
    file: false,
    file_location: 'template.log',
  },
};
