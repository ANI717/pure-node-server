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
                reject(new AppError('Invalid JSON', 400));
            }
        });
        
        req.on('error', (err) => {
            reject(new AppError('Error reading request body', 500));
        });
    });
}

export default getRequestBody;
