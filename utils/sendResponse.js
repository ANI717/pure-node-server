function sendResponse(res, statusCode, data) {
    const responseBody = JSON.stringify(data);

    res.writeHead(statusCode, {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(responseBody),
    });

    res.end(responseBody);
}

export default sendResponse;
