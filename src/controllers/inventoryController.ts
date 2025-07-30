export class InventoryController {
    constructor(private inventoryService: any) {}

    async addItem(req: any, res: any) {
        try {
            const newItem = await this.inventoryService.addItem(req.body);
            res.status(201).json(newItem);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateItem(req: any, res: any) {
        try {
            const updatedItem = await this.inventoryService.updateItem(req.params.id, req.body);
            res.status(200).json(updatedItem);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getItem(req: any, res: any) {
        try {
            const item = await this.inventoryService.getItem(req.params.id);
            res.status(200).json(item);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllItems(req: any, res: any) {
        try {
            const items = await this.inventoryService.getAllItems();
            res.status(200).json(items);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteItem(req: any, res: any) {
        try {
            await this.inventoryService.deleteItem(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}