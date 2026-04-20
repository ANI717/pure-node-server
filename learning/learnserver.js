import http from 'http';
import fs from 'fs/promises';


let faviconCache = null;


async function handleFavicon(req, res) {
    try {
        if (!faviconCache) {
            faviconCache = await fs.readFile('./favicon.ico');
        }

        res.writeHead(200, { 'Content-Type': 'image/x-icon' });
        res.end(faviconCache);

    } catch (err) {
        res.writeHead(404);
        res.end('Not Found');
        console.error('Error handling favicon:', err.toString());
    }
}


const server = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        return handleFavicon(req, res);
    }

    console.log(`Received request for ${req.url} with method ${req.method}`);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');

    console.log(`Responded with status code ${res.statusCode}`);
});


server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
