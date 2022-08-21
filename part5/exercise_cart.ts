class Product {
    public id: number;
    public name: string;
    public price: number;

    constructor(
        id: number,
        name: string,
        price: number
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}


class Delivery {
    public date: Date;

    constructor(date: Date) {
        this.date = date;
    }
}


class HomeDelivery extends Delivery {
    public address: string;

    constructor(date: Date, address: string) {
        super(date);
        this.address = address;
    }
}


class ShopDelivery extends Delivery {
    public shopId: number;

    constructor(date: Date, id: number) {
        super(date);
        this.shopId = id;
    }
}


type deliveryOptions = HomeDelivery | ShopDelivery | null


class Cart {
    private products: Product[];
    private delivery: deliveryOptions;

    constructor(
        delivery: deliveryOptions = null,
        products: Product[] = []
    ) {
        this.products = products;
        this.delivery = delivery;
    }

    public addProduct(product: Product): void {
        this.products.push(product);
    }

    public deleteProduct(productId: number): void {
        this.products = this.products.filter((p: Product) => p.id !== productId);
    }

    public cartCost(): number {
        return this.products
            .map((p: Product) => p.price)
            .reduce((p1: number, p2: number) => p1 + p2);
    }

    public setDelivery(delivery: deliveryOptions): void {
        this.delivery = delivery;
    }

    public checkout() {
        if (this.products.length === 0) {
            throw new Error('Корзина пуста!');
        }
        if (!this.delivery) {
            throw new Error('Не указан способ доставки!');
        }
        return { success: true };
    }
}

const cart = new Cart();
cart.addProduct(new Product(1, 'Cookies', 5));
cart.addProduct(new Product(2, 'Cake', 10));
cart.addProduct(new Product(3, 'Biscuit', 15));
cart.deleteProduct(1);
cart.setDelivery(new HomeDelivery(new Date(), ''));
console.log(cart.cartCost());
console.log(cart.checkout());
