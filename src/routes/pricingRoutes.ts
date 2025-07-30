import { Router } from 'express';
import { PricingController } from '../controllers/pricingController';

const router = Router();
const pricingController = new PricingController();

// Define routes for managing pricing information
router.post('/prices', pricingController.createPrice);
router.get('/prices', pricingController.getAllPrices);
router.get('/prices/:id', pricingController.getPriceById);
router.put('/prices/:id', pricingController.updatePrice);
router.delete('/prices/:id', pricingController.deletePrice);

export default router;