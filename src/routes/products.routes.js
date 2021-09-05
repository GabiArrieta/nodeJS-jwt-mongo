const { Router } = require('express');
const router = Router();
import * as productsControllers from '../controllers/products.controllers';
import { authJwt } from '../middlewares'

router.post('/', [authJwt.verifyToken, authJwt.isModerator], productsControllers.createProduct);
router.get('/', productsControllers.getProducts);
router.get('/:productId', productsControllers.getProductById);
router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productsControllers.updateProductById);
router.delete('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productsControllers.deleteProductById);


export default router;