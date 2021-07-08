const cvHandler = require('../../../js/data').default();

const lookupClaimantUcId = async (req, res, next) => {
  res.locals.user = await cvHandler.getSingleUser(res.nunjucks.userSession.user.ucid);
  next();
};

const saveClaimant = async (req, res, next) => {
  res.locals.updatedUser = await cvHandler.uploadSingleUser(res.locals.userToUpload);
  next();
};

module.exports = {
  lookupClaimantUcId,
  saveClaimant,
};
