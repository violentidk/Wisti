import { Warehouse } from '../models/warehouse';
import { Inventory } from '../models/inventory';

export class WarehouseService {
    async createWarehouse(data: any): Promise<Warehouse> {
        const warehouse = new Warehouse(data);
        return await warehouse.save();
    }

    async getWarehouseById(id: string): Promise<Warehouse | null> {
        return await Warehouse.findById(id);
    }

    async updateWarehouse(id: string, data: any): Promise<Warehouse | null> {
        return await Warehouse.findByIdAndUpdate(id, data, { new: true });
    }

    async deleteWarehouse(id: string): Promise<Warehouse | null> {
        return await Warehouse.findByIdAndDelete(id);
    }

    async getAllWarehouses(): Promise<Warehouse[]> {
        return await Warehouse.find();
    }

    async transferInventory(warehouseId: string, inventoryId: string, quantity: number): Promise<void> {
        const warehouse = await this.getWarehouseById(warehouseId);
        const inventoryItem = await Inventory.findById(inventoryId);

        if (!warehouse || !inventoryItem) {
            throw new Error('Warehouse or Inventory Item not found');
        }

        if (inventoryItem.quantity < quantity) {
            throw new Error('Insufficient inventory quantity');
        }

        inventoryItem.quantity -= quantity;
        await inventoryItem.save();

        // Logic to add inventory to the warehouse can be added here
    }
}