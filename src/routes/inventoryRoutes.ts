import { Router } from 'express';
import InventoryController from '../controllers/inventoryController';

const router = Router();
const inventoryController = new InventoryController();

// Define routes for inventory management
router.post('/inventory', inventoryController.addInventoryItem);
router.get('/inventory', inventoryController.getInventoryItems);
router.get('/inventory/:id', inventoryController.getInventoryItemById);
router.put('/inventory/:id', inventoryController.updateInventoryItem);
router.delete('/inventory/:id', inventoryController.deleteInventoryItem);

export default router;