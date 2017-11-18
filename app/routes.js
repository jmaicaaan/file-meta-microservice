import multer from 'multer';
import { introHandler, uploadHandler } from './handlers/index';

const upload = multer({ });

export function routes(app) {
  app.get('/', introHandler);
  app.post('/upload', upload.single('attachment'), uploadHandler);
};