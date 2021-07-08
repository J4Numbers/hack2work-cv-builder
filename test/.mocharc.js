module.exports = {
  require: [
    'test/spec/helpers/setup.js',
    'test/spec/helpers/server-setup.js',
  ],
  globals: [
    '__coverage__'
  ],
  spec: 'test/spec/app/**/*.js',
  ignore: [
    'test/spec/app/routes/login/test_login_internal_spec.js',
    'test/spec/app/routes/login/test_login_localstack_spec.js'
    ],
  timeout: 10000,
  exit: true,
};
