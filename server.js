const sendResponse = require('../utils/sendResponse');

function handleRoot(req, res) {
  return sendResponse(res, 200, {
    message: 'Status Up',
  });
}

module.exports = handleRoot;