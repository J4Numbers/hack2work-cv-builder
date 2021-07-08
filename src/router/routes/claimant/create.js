const { CompletionStatus } = require('../../../js/objects/completion-status');
const { QuestionArea } = require('../../../js/objects/question-area');
const renderer = require('../../../js/renderer/nunjucks-renderer').default();
const { lookupClaimantUcId } = require('./common');

const restructureQuestionData = (req, res, next) => {
  res.locals.render = { questions: {} };
  console.log(JSON.stringify(res.locals));
  for (const question in QuestionArea) {
    const foundQuestion = res.locals.user.keyDetails
      .find((keyQuestion) => keyQuestion.questionArea === question);
    if (foundQuestion === undefined) {
      res.locals.render.questions[question] = {
        id: '2819502',
        questionArea: question,
        completionStatus: CompletionStatus.NOT_STARTED,
      };
    } else {
      res.locals.render.questions[question] = foundQuestion;
    }
  }
  next();
};

const renderResponse = (req, res, next) => {
  res.contentType = 'text/html';
  res.header('content-type', 'text-html');
  res.send(200, renderer.render('pages/claimant/create.njk', {
    ...res.nunjucks,
    ...res.locals.render,
  }));

  next();
};

module.exports = (server) => {
  server.get('/claimant/create', lookupClaimantUcId, restructureQuestionData, renderResponse);
};
