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
