import { Router } from 'express';
import { ShopController } from '../controllers/shopController';

const router = Router();
const shopController = new ShopController();

// Route to get all shops
router.get('/', shopController.getAllShops.bind(shopController));

// Route to get a shop by ID
router.get('/:id', shopController.getShopById.bind(shopController));

// Route to create a new shop
router.post('/', shopController.createShop.bind(shopController));

// Route to update a shop by ID
router.put('/:id', shopController.updateShop.bind(shopController));

// Route to delete a shop by ID
router.delete('/:id', shopController.deleteShop.bind(shopController));

export default router;