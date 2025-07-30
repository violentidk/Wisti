export class PricingService {
    private prices: Map<string, number>;

    constructor() {
        this.prices = new Map<string, number>();
    }

    addPrice(itemId: string, price: number): void {
        this.prices.set(itemId, price);
    }

    updatePrice(itemId: string, price: number): void {
        if (this.prices.has(itemId)) {
            this.prices.set(itemId, price);
        } else {
            throw new Error("Price for this item does not exist.");
        }
    }

    getPrice(itemId: string): number | undefined {
        return this.prices.get(itemId);
    }

    removePrice(itemId: string): void {
        if (!this.prices.delete(itemId)) {
            throw new Error("Price for this item does not exist.");
        }
    }

    listPrices(): Array<{ itemId: string; price: number }> {
        return Array.from(this.prices.entries()).map(([itemId, price]) => ({ itemId, price }));
    }
}