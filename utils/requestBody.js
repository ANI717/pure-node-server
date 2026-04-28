import { AppError } from './errors.js'


async function getRequestBody(req) {
    return new Promise((resolve, reject) => {
        let body = '';

        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        
        req.on('end', () => {
            try {
                const parsed = JSON.parse(body);
                resolve(parsed);
            } catch (err) {
                reject(new AppError(400, 'Invalid JSON'));
            }
        });
        
        req.on('error', (err) => {
            reject(new AppError(500, 'Error reading request body'));
        });
    });
}

export default getRequestBody;
