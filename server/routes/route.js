import express from 'express';
import { getProductById, getProducts } from '../controller/product-controller.js';
import { userSignUp ,userLogin} from '../controller/user-controller.js';

const router = express.Router();

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

router.post('/signup', userSignUp);
router.post('/login',userLogin);

export default router;