import https from 'node:https';
import sendResponse from '../utils/sendResponse.js';
import { AppError } from '../utils/errors.js';

function handleCall(req, res) {
  return new Promise((resolve, reject) => {
    const externalReq = https.get('https://www.google.com', (externalRes) => {
      let data = '';

      externalRes.on('data', (chunk) => {
        data += chunk.toString();
      });

      externalRes.on('end', () => {
        sendResponse(res, 200, {
          message: 'Response received from google.com',
          statusCode: externalRes.statusCode,
          data,
        });
        resolve();
      });
    });

    externalReq.on('error', (err) => {
      reject(new AppError(502, `Failed to call external service: ${err.message}`));
    });

    externalReq.end();
  });
}

export default handleCall;