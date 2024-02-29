import express from 'express';

import { httpGetAllUsers, httpCreateUser, httpGetUserById } from './users.controller.js';

const router = express.Router();
router.get('/', httpGetAllUsers);

router.get('/:id', httpGetUserById);
router.post('/', httpCreateUser);

export default router;
