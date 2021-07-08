module.exports = {
  app: {
    http2: {
      enabled: 'APP_HTTP2_ENABLED',
      ca: 'APP_HTTP2_CA',
      key: 'APP_HTTP2_KEY',
      cert: 'APP_HTTP2_CERT',
    },
    name: 'APP_NAME',
    hostname: 'APP_HOSTNAME',
    port: 'APP_PORT',
  },
  data: {
    source: 'DATA_SOURCE',
    mongo: {
      url: 'DATA_MONGO_URL',
      options: {
        auth: {
          authSource: 'DATA_MONGO_AUTH_SOURCE',
        },
        user: 'DATA_MONGO_USERNAME',
        pass: 'DATA_MONGO_PASSWORD',
      },
    },
  },
  banner: {
    phrase: 'BANNER_PHRASE',
    feedback_link: 'BANNER_FEEDBACK_LINK',
  },
  logger: {
    level: 'LOGGER_LEVEL',
    file: 'LOGGER_FILE_MODE',
    file_location: 'LOGGER_FILE_LOCATION',
  },
};
