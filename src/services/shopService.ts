import { Shop } from '../models/shop';

export class ShopService {
    async createShop(shopData: any) {
        const shop = new Shop(shopData);
        return await shop.save();
    }

    async getShopById(shopId: string) {
        return await Shop.findById(shopId);
    }

    async updateShop(shopId: string, shopData: any) {
        return await Shop.findByIdAndUpdate(shopId, shopData, { new: true });
    }

    async deleteShop(shopId: string) {
        return await Shop.findByIdAndDelete(shopId);
    }

    async getAllShops() {
        return await Shop.find();
    }
}