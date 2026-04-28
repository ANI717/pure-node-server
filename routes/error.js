import { AppError } from '../utils/errors.js';

function handleError(req, res) {
  throw new AppError(400, 'Intentional bad request error');
}

export default handleError;