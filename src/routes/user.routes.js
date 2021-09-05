const { Router } = require('express');
const router = Router();

import * as userController from '../controllers/user.controller.js';
import { authJwt } from '../middlewares';

router.post('/', [authJwt.verifyToken,authJwt.isAdmin],userController.createUser); 

export default router;