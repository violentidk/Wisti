import { Router } from 'express';
import WarehouseController from '../controllers/warehouseController';

const router = Router();
const warehouseController = new WarehouseController();

// Define routes for managing warehouse information
router.post('/', warehouseController.createWarehouse);
router.get('/', warehouseController.getAllWarehouses);
router.get('/:id', warehouseController.getWarehouseById);
router.put('/:id', warehouseController.updateWarehouse);
router.delete('/:id', warehouseController.deleteWarehouse);

export default router;