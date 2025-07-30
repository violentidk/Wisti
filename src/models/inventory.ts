export interface InventoryItem {
    id: string;
    name: string;
    quantity: number;
    warehouseId: string;
    shopId?: string;
    priceId: string;
    createdAt: Date;
    updatedAt: Date;
}

export class Inventory {
    private items: InventoryItem[] = [];

    constructor() {}

    public addItem(item: InventoryItem): void {
        this.items.push(item);
    }

    public updateItem(id: string, updatedItem: Partial<InventoryItem>): void {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            this.items[index] = { ...this.items[index], ...updatedItem };
        }
    }

    public getItem(id: string): InventoryItem | undefined {
        return this.items.find(item => item.id === id);
    }

    public getAllItems(): InventoryItem[] {
        return this.items;
    }

    public deleteItem(id: string): void {
        this.items = this.items.filter(item => item.id !== id);
    }
}