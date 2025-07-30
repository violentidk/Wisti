export class ShopController {
    constructor(private shopService: any) {}

    async createShop(req: any, res: any) {
        try {
            const shopData = req.body;
            const newShop = await this.shopService.createShop(shopData);
            res.status(201).json(newShop);
        } catch (error) {
            res.status(500).json({ message: 'Error creating shop', error });
        }
    }

    async getShops(req: any, res: any) {
        try {
            const shops = await this.shopService.getAllShops();
            res.status(200).json(shops);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving shops', error });
        }
    }

    async updateShop(req: any, res: any) {
        try {
            const shopId = req.params.id;
            const shopData = req.body;
            const updatedShop = await this.shopService.updateShop(shopId, shopData);
            res.status(200).json(updatedShop);
        } catch (error) {
            res.status(500).json({ message: 'Error updating shop', error });
        }
    }

    async deleteShop(req: any, res: any) {
        try {
            const shopId = req.params.id;
            await this.shopService.deleteShop(shopId);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting shop', error });
        }
    }

    async getShopInventory(req: any, res: any) {
        try {
            const shopId = req.params.id;
            const inventory = await this.shopService.getShopInventory(shopId);
            res.status(200).json(inventory);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving shop inventory', error });
        }
    }
}