import s3Router from './s3/s3.router'
import express from 'express';

const router = express.Router();

router.use('/s3', s3Router);

router.get('/lens', (req, res) => {
    res.send('lens');
    });

export default router;
