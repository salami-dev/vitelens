import express from 'express';

import { httpCreatePhoto, httpGetAllPhotos, httpGetPhotoById } from './photo.controller.js';

const router = express.Router();
router.get('/', httpGetAllPhotos);

router.get('/:id', httpGetPhotoById);
router.post('/', httpCreatePhoto);

export default router;
