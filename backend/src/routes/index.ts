import { Router } from 'express';
import multer from 'multer';
import { resolve } from 'node:path';

import { Categories } from '../app/controllers/Categories';
import { CategoriesService } from '../app/services/Categories';
import { ProductsService } from '../app/services/Products';
import { Products } from '../app/controllers/Products';
import { OrderController } from '../app/controllers/Orders';
import { OrderSerice } from '../app/services/Order';

const categoriesService = new CategoriesService();
const categoriesController = new Categories(categoriesService);
const productsService = new ProductsService();
const productsConttroler = new Products(productsService);
const orderService = new OrderSerice();
const orderController = new OrderController(orderService);

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename(req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});
const router = Router();

// List categories
// Create category
// List products
// Create product
// Get products by category
// List orders
// Create order
// change order status
// Delete/ cancel order

router.get('/categories', (req, res) => categoriesController.show(req, res));
router.post('/categories', (req, res) => categoriesController.store(req, res));
router.put('/categories/:id', (req, res) =>
  categoriesController.update(req, res),
);
router.get('/categories/:id/products', (req, res) =>
  categoriesController.productsByCategory(req, res),
);

router.post(
  '/products/categorie/:categoryId/create',
  upload.single('image'),
  (req, res) => productsConttroler.store(req, res),
);

router.post('/orders', (req, res) => orderController.store(req, res));
router.put('/orders/:id', (req, res) => orderController.update(req, res));
router.delete('/orders/:id', (req, res) => orderController.destroy(req, res));
router.get('/orders', (req, res) => orderController.show(req, res));

export { router };
