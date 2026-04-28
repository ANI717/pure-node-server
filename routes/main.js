const getRequestBody = require('../utils/requestBody');
const { AppError } = require('../utils/errors');

async function handleMain(req, res) {
  const body = await getRequestBody(req);

  if (!body) {
    throw new AppError(400, 'Request body is empty');
  }

  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': Buffer.byteLength(body),
  });

  res.end(body);
}

module.exports = handleMain;