//Shopping cart Class
class ShoppingCart {
  constructor() {
    this.products = new Map();
  }
  addProduct(product) {
    const price = Number(product.price);

    // if (!Number.isFinite(price) || price < 0) {
    //   console.error(
    //     `Invalid price for ${product.name}. Must be a non-negative number.`
    //   );
    //   console.log("Please enter a valid price and try again.");
    //   return;
    // }

    if (!product.isValid()) {
      console.log(`Cannot add "${product.name}" due to invalid price.`);
      return;
    }

    if (this.products.has(product.name)) {
      console.error(`Product "${product.name}" is already in the cart.`);
      console.log("Please use a different product name.");
      return;
    }

    product.price = price;

    this.products.set(product.name, product);
    console.log(`${product.name} added in the cart.`);
  }
  removeProduct(productName) {
    // this.products = this.products.filter((p) => p !== product);
    // console.log(`${product.name} removed item from cart`);

    if (this.products.has(productName)) {
      this.products.delete(productName);
      console.log(`${productName} remove from cart`);
    } else {
      console.log(`${productName} not found in cart`);
    }
  }
  calculateTotal() {
    let total = 0;
    for (const product of this.products.values()) {
      total += product.price * product.quantity;
    }
    // console.log(`total Price :${total}`);
    return total;
  }

  listProducts() {
    console.log("Products in Carts:");

    for (const [key, product] of this.products.entries()) {
      console.log(
        `- ${product.name}:${product.price}  X ${product.quantity} = ${
          product.price * product.quantity
        } `
      );
    }
  }
}

module.exports = ShoppingCart;
