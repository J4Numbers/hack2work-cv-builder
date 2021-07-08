const { CompletionStatus } = require('../../../js/objects/completion-status');
const { QuestionArea } = require('../../../js/objects/question-area');
const renderer = require('../../../js/renderer/nunjucks-renderer').default();
const { lookupClaimantUcId, saveClaimant } = require('./common');

const discoverSingleQuestion = (req, res, next) => {
  res.locals.render = { };
  const foundQuestion = res.locals.user.keyDetails
    .find((keyQuestion) => keyQuestion.questionArea === QuestionArea.PERSONAL_PROFILE);
  if (foundQuestion === undefined) {
    res.locals.render.question = {
      id: '2819502',
      questionArea: QuestionArea.PERSONAL_PROFILE,
      completionStatus: CompletionStatus.NOT_STARTED,
    };
  } else {
    res.locals.render.question = foundQuestion;
  }
  next();
};

const interpretResponse = (req, res, next) => {
  res.locals.user.keyDetails = res.locals.user.keyDetails
    .filter((keyQuestion) => keyQuestion.questionArea !== QuestionArea.PERSONAL_PROFILE);
  const generatedQuestion = {
    questionArea: QuestionArea.PERSONAL_PROFILE,
    completionStatus: CompletionStatus.COMPLETED,
    'objective-known': req.body['objective-known'],
    'objective-explanation': req.body['objective-explanation'],
  };
  res.locals.user.keyDetails.push(generatedQuestion);
  res.locals.userToUpload = res.locals.user;
  next();
};

const redirectClient = (req, res, next) => {
  res.redirect(302, '/claimant/create', next);
};

const renderResponse = (req, res, next) => {
  res.contentType = 'text/html';
  res.header('content-type', 'text-html');
  res.send(200, renderer.render('pages/claimant/personal.njk', {
    ...res.nunjucks,
    ...res.locals.render,
  }));

  next();
};

module.exports = (server) => {
  server.get('/claimant/create/personal-profile', lookupClaimantUcId, discoverSingleQuestion, renderResponse);
  server.post('/claimant/create/personal-profile', lookupClaimantUcId, interpretResponse, saveClaimant, redirectClient);
};
