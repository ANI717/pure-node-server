const { AppError } = require('../utils/errors');

function handleError(req, res) {
  throw new AppError(400, 'Intentional bad request error');
}

module.exports = handleError;