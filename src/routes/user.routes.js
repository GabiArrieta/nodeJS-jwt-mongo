const { Router } = require('express');
const router = Router();

import * as userController from '../controllers/user.controller.js';
import { authJwt, verifySignup } from '../middlewares';

router.post('/', [authJwt.verifyToken,authJwt.isAdmin, verifySignup.checkRolesExisted],userController.createUser); 

export default router;