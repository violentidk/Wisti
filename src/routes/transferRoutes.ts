import { Router } from 'express';
import TransferController from '../controllers/transferController';

const router = Router();
const transferController = new TransferController();

// Define routes for handling inventory transfers
router.post('/transfers', transferController.createTransfer);
router.get('/transfers/:id', transferController.getTransferById);
router.get('/transfers', transferController.getAllTransfers);
router.put('/transfers/:id', transferController.updateTransfer);
router.delete('/transfers/:id', transferController.deleteTransfer);

export default router;