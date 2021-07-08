import config from 'config';
import StandardCvDataHandler from './standard-cv-data-handler';
import MongoCvDataHandler from './mongo-cv-data-handler';
import LocalCvDataHandler from './local-cv-data-handler';

let cvDataHandeler: StandardCvDataHandler;

const resolveCvDataHandler = (): StandardCvDataHandler => {
  const dataManagerSource = config.get('data.source');
  let dataHandlerInst: StandardCvDataHandler;

  if (dataManagerSource === 'local') {
    dataHandlerInst = new LocalCvDataHandler();
  } else if (dataManagerSource === 'mongo') {
    dataHandlerInst = new MongoCvDataHandler(
      config.get('data.mongo.url'),
      config.get('data.mongo.options'),
    );
  } else {
    dataHandlerInst = new LocalCvDataHandler();
  }

  return dataHandlerInst;
};

export default (): StandardCvDataHandler => {
  if (cvDataHandeler === undefined) {
    cvDataHandeler = resolveCvDataHandler();
  }
  return cvDataHandeler;
};
