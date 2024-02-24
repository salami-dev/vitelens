import express from 'express';

const router = express.Router();

router.use('/lens', (req, res) => res.status(200).json({ message: 'lens route' }));

export default router;
