const { Router } = require('express');
const router = Router();
import * as productsControllers from '../controllers/products.controllers';

router.post('/', productsControllers.createProduct);
router.get('/', productsControllers.getProducts);
router.get('/:productId', productsControllers.getProductById);
router.put('/:productId', productsControllers.updateProductById);
router.delete('/:productId', productsControllers.deleteProductById);


export default router;