export class WarehouseController {
    constructor(private warehouseService: any) {}

    async createWarehouse(req: any, res: any) {
        try {
            const warehouseData = req.body;
            const newWarehouse = await this.warehouseService.createWarehouse(warehouseData);
            res.status(201).json(newWarehouse);
        } catch (error) {
            res.status(500).json({ message: 'Error creating warehouse', error });
        }
    }

    async getWarehouses(req: any, res: any) {
        try {
            const warehouses = await this.warehouseService.getAllWarehouses();
            res.status(200).json(warehouses);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving warehouses', error });
        }
    }

    async updateWarehouse(req: any, res: any) {
        try {
            const warehouseId = req.params.id;
            const warehouseData = req.body;
            const updatedWarehouse = await this.warehouseService.updateWarehouse(warehouseId, warehouseData);
            res.status(200).json(updatedWarehouse);
        } catch (error) {
            res.status(500).json({ message: 'Error updating warehouse', error });
        }
    }

    async deleteWarehouse(req: any, res: any) {
        try {
            const warehouseId = req.params.id;
            await this.warehouseService.deleteWarehouse(warehouseId);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting warehouse', error });
        }
    }
}