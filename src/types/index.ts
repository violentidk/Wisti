export interface User {
    id: number;
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface InventoryItem {
    id: number;
    name: string;
    quantity: number;
    warehouseId: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Price {
    id: number;
    itemId: number;
    amount: number;
    currency: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Transfer {
    id: number;
    itemId: number;
    fromWarehouseId: number;
    toWarehouseId: number;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Shop {
    id: number;
    name: string;
    location: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Warehouse {
    id: number;
    name: string;
    location: string;
    createdAt: Date;
    updatedAt: Date;
}