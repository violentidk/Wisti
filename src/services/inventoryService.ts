import { Inventory } from '../models/inventory';
import { Price } from '../models/price';

export class InventoryService {
    async addInventoryItem(itemData: any): Promise<Inventory> {
        const newItem = new Inventory(itemData);
        return await newItem.save();
    }

    async updateInventoryItem(itemId: string, updateData: any): Promise<Inventory | null> {
        return await Inventory.findByIdAndUpdate(itemId, updateData, { new: true });
    }

    async getInventoryItem(itemId: string): Promise<Inventory | null> {
        return await Inventory.findById(itemId);
    }

    async getAllInventoryItems(): Promise<Inventory[]> {
        return await Inventory.find();
    }

    async deleteInventoryItem(itemId: string): Promise<Inventory | null> {
        return await Inventory.findByIdAndDelete(itemId);
    }

    async updatePricing(itemId: string, priceData: any): Promise<Price | null> {
        const price = new Price(priceData);
        await price.save();
        return await Inventory.findByIdAndUpdate(itemId, { price: price._id }, { new: true });
    }
}