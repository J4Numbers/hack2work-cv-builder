module.exports = {
  require: [
    'test/spec/helpers/setup.js',
    'test/spec/helpers/server-setup.js',
    'test/spec/helpers/run-server.js',
  ],
  spec: 'test/spec/browser/**/*.js',
  ignore: [
    'test/spec/browser/test_login_internal_journey_spec.js',
    'test/spec/browser/test_login_localstack_journey_spec.js'
  ],
  timeout: 5000,
  exit: true,
};
