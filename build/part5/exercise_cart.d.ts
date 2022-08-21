declare class Product {
    id: number;
    name: string;
    price: number;
    constructor(id: number, name: string, price: number);
}
declare class Delivery {
    date: Date;
    constructor(date: Date);
}
declare class HomeDelivery extends Delivery {
    address: string;
    constructor(date: Date, address: string);
}
declare class ShopDelivery extends Delivery {
    shopId: number;
    constructor(date: Date, id: number);
}
declare type deliveryOptions = HomeDelivery | ShopDelivery | null;
declare class Cart {
    private products;
    private delivery;
    constructor(delivery?: deliveryOptions, products?: Product[]);
    addProduct(product: Product): void;
    deleteProduct(productId: number): void;
    cartCost(): number;
    setDelivery(delivery: deliveryOptions): void;
    checkout(): {
        success: boolean;
    };
}
declare const cart: Cart;
//# sourceMappingURL=exercise_cart.d.ts.map