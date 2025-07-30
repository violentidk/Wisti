import { Transfer } from '../models/transfer';
import { Inventory } from '../models/inventory';
import { Warehouse } from '../models/warehouse';
import { Shop } from '../models/shop';

export class TransferService {
    async createTransfer(transferData: any) {
        const transfer = new Transfer(transferData);
        await transfer.save();
        return transfer;
    }

    async getTransfers() {
        return await Transfer.find().populate('fromWarehouse toWarehouse');
    }

    async getTransferById(transferId: string) {
        return await Transfer.findById(transferId).populate('fromWarehouse toWarehouse');
    }

    async updateTransfer(transferId: string, updateData: any) {
        return await Transfer.findByIdAndUpdate(transferId, updateData, { new: true });
    }

    async deleteTransfer(transferId: string) {
        return await Transfer.findByIdAndDelete(transferId);
    }

    async transferInventory(transferId: string) {
        const transfer = await this.getTransferById(transferId);
        if (!transfer) {
            throw new Error('Transfer not found');
        }

        const fromWarehouse = await Warehouse.findById(transfer.fromWarehouse);
        const toWarehouse = await Warehouse.findById(transfer.toWarehouse);
        const inventoryItem = await Inventory.findById(transfer.inventoryItem);

        if (fromWarehouse && toWarehouse && inventoryItem) {
            fromWarehouse.inventoryQuantity -= transfer.quantity;
            toWarehouse.inventoryQuantity += transfer.quantity;

            await fromWarehouse.save();
            await toWarehouse.save();
            return { fromWarehouse, toWarehouse };
        } else {
            throw new Error('Invalid transfer data');
        }
    }
}