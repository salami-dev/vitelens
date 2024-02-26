import express from 'express';
import { httpCreatePresignedUrl, httpCreateGetPresignedUrl } from './s3.controller';

const router = express.Router();

router.post('/', httpCreatePresignedUrl);
router.get('/', httpCreateGetPresignedUrl);

export default router;
