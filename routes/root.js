import sendResponse from '../utils/sendResponse.js';

function handleRoot(req, res) {
	return sendResponse(res, 200, {
		message: 'Server is running',
	});
}

export default handleRoot;
