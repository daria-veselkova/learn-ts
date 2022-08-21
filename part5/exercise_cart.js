"use strict";
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    constructor(date, address) {
        super(date);
        this.address = address;
    }
}
class ShopDelivery extends Delivery {
    constructor(date, id) {
        super(date);
        this.shopId = id;
    }
}
class Cart {
    constructor(delivery = null, products = []) {
        this.products = products;
        this.delivery = delivery;
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    cartCost() {
        return this.products
            .map((p) => p.price)
            .reduce((p1, p2) => p1 + p2);
    }
    setDelivery(delivery) {
        this.delivery = delivery;
    }
    checkout() {
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
