export class PricingController {
    private pricingService: any; // Replace 'any' with the actual type of your pricing service

    constructor(pricingService: any) { // Replace 'any' with the actual type of your pricing service
        this.pricingService = pricingService;
    }

    public async getPricing(req: any, res: any): Promise<void> {
        try {
            const pricingData = await this.pricingService.getAllPricing();
            res.status(200).json(pricingData);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving pricing data', error });
        }
    }

    public async addPricing(req: any, res: any): Promise<void> {
        try {
            const newPricing = req.body;
            const createdPricing = await this.pricingService.createPricing(newPricing);
            res.status(201).json(createdPricing);
        } catch (error) {
            res.status(500).json({ message: 'Error adding pricing data', error });
        }
    }

    public async updatePricing(req: any, res: any): Promise<void> {
        try {
            const pricingId = req.params.id;
            const updatedPricing = req.body;
            const result = await this.pricingService.updatePricing(pricingId, updatedPricing);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ message: 'Error updating pricing data', error });
        }
    }

    public async deletePricing(req: any, res: any): Promise<void> {
        try {
            const pricingId = req.params.id;
            await this.pricingService.deletePricing(pricingId);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting pricing data', error });
        }
    }
}