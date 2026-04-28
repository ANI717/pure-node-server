import getRequestBody from '../utils/requestBody.js';
import { AppError } from '../utils/errors.js';

async function handleMain(req, res) {
  const body = await getRequestBody(req);

  if (!body) {
    throw new AppError(400, 'Request body is empty');
  }

  const responseBody = JSON.stringify(body);

  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(responseBody),
  });

  res.end(responseBody);
}

export default handleMain;