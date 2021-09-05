const { Router } = require('express');
const router = Router();

import * as authController from '../controllers/auth.controller';
import {verifySignup} from '../middlewares';

router.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

router.post('/signup', [verifySignup.checkDuplicateUsernameorEmail, verifySignup.checkRolesExisted], authController.signUp);
router.post('/signin', authController.signIn);


export default router;