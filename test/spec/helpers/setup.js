const chai = require('chai');
const sinon = require('sinon');

const chaiAsPromised = require('chai-as-promised');
const chaiHttp = require('chai-http');
const sinonChai = require('sinon-chai');

const clearModule = require('clear-module');
const importFresh = require('import-fresh');
const mockRequire = require('mock-require');

process.env.NODE_ENV = 'test';

chai.use(chaiAsPromised);
chai.use(chaiHttp);
chai.use(sinonChai);

global.sinon = sinon;
global.expect = chai.expect;
global.request = chai.request;

// eslint-disable-next-line import/no-dynamic-require,global-require
global.testRequire = (moduleName) => require(moduleName);
global.importFresh = (moduleName) => importFresh(moduleName);
global.clearModule = (moduleName) => clearModule(moduleName);
global.startMockRequire = (moduleName, replacement) => mockRequire(moduleName, replacement);
global.stopMockRequire = (moduleName) => mockRequire.stop(moduleName);

global.refreshPage = async (browser, visitPath) => {
  await browser.visit(visitPath);
};
