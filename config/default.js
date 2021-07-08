module.exports = {
  app: {
    http2: {
      enabled: false,
      ca: undefined,
      key: '/path/to/key/file',
      cert: '/path/to/cert/file',
    },
    name: 'h2w-cv-builder',
    hostname: 'localhost',
    port: 8080,
  },
  banner: {
    phrase: 'Internal',
    feedback_link: 'https://github.com/j4numbers/hack2work-cv-builder',
  },
  data: {
    source: 'local',
    mongo: {
      url: 'mongo://mongoserver.com/cv-builder',
      options: {
        auth: {
          authSource: 'admin',
        },
        user: 'root',
        pass: 'password',
      },
    },
  },
  nunjucks: {
    options: {},
  },
  logger: {
    level: 'debug',
    file: false,
    file_location: 'h2w-cv-builder.log',
  },
};
