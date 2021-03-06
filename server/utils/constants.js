/**
 * All project constants
 * @module utils/constants
*/
module.exports = {
  messages: {
    error: {
      INVALID_TELEGRAM_ID: 'The telegram id sent is invalid.',
      INVALID_DATA: 'No data message was sent.',
      INVALID_ERROR_MESSAGE: 'The error message sent is invalid.',
      UNEXPECTED: 'We could not deliver your report, please try again.',
      UNDEFINED_NAME: 'Undefined'
    },
    info: {
      REPORT_SENT: 'The report was successful sent.',
      MORE_INFO: 'More info at '
    }
  },
  regex:{
    integer: /^-?\d+$/
  },
  urls: {
    ROLLBAR_PREFIX: 'https://rollbar.com/guiconti/',
    ROLLBAR_MIDDLE: '/items/',
    ROLLBAR_SUFFIX: '/occurrences/'
  }
};
