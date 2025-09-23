const readline = require("readline");

//product class
class Product {
  constructor(name, price) {
    this._name = name;
    this._price = price;
  }
  get name() {
    return this._name;
  }
  get price() {
    return this._price;
  }
  set price(newPrice) {
    this._price = newPrice;
  }
}
//Shopping cart Class
class ShoppingCart {
  constructor() {
    this.products = [];
  }
  addProduct(product) {
    this.products.push(product);
    console.log(`${product.name} added in the cart.`);
  }
  removeProduct(product) {
    this.products = this.products.filter((p) => p !== product);
    console.log(`${product.name} removed item from cart`);
  }
  calculateTotal() {
    return this.products.reduce((total, p) => total + p.price, 0);
  }

  listProducts() {
    console.log("Products in Carts:");
    this.products.forEach((p) => {
      console.log(`- ${p.name}: ${p.price}`);
    });
  }
}

// Main Products Operations

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const cart = new ShoppingCart();

function askProduct() {
  r1.question("Enter the product name", (name) => {
    if (name.toLowerCase() === "done") {
      cart.listProducts();
      console.log("Total Price:" + cart.calculateTotal());
      r1.close();
    } else {
      r1.question("Enter Price:", (price) => {
        const product = new Product(name, parseFloat(price));
        cart.addProduct(product);
        askProduct();
      });
    }
  });
}

console.log("=== shopping cart ===");
askProduct();

// const p1 = new Product("NoteBook", 300);
// const p2 = new Product("Pens", 30);
// const p3 = new Product("Eraser", 10);

// const cart = new ShoppingCart();

// cart.addProduct(p1);
// cart.addProduct(p2);
// cart.addProduct(p3);

// cart.removeProduct(p2);

// cart.listProducts();

// console.log("Total Price :" + cart.calculateTotal());
