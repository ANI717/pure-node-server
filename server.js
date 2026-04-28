import http from 'node:http';

import handleRoot from './routes/root.js';
import handleError from './routes/error.js';
import handleMain from './routes/main.js';
import handleCall from './routes/call.js';

import { AppError } from './utils/errors.js';
import sendResponse from './utils/sendResponse.js';

const PORT = 3000;

const server = http.createServer(async (req, res) => {
  try {
    const { method, url } = req;

    if (method === 'GET' && url === '/') {
      return handleRoot(req, res);
    }

    if (method === 'GET' && url === '/error') {
      return handleError(req, res);
    }

    if (method === 'POST' && url === '/main') {
      return handleMain(req, res);
    }

    if (method === 'GET' && url === '/call') {
      return handleCall(req, res);
    }

    throw new AppError(404, 'Route not found');
  } catch (error) {
    console.error('Server error:', error);

    if (error instanceof AppError) {
      return sendResponse(res, error.statusCode, {
        error: error.message,
      });
    }

    return sendResponse(res, 500, {
      error: 'Internal Server Error',
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});