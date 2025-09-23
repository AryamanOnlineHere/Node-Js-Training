// class Product {
//   constructor(name, price) {
//     this._name = name;
//     this._price = price;
//   }
//   get name() {
//     return this._name;
//   }
//   get price() {
//     return this._price;
//   }
//   set price(newPrice) {
//     this._price = newPrice;
//   }
// }
// module.exports = Product;

class Product {
  constructor(name, price, quantity) {
    let _price = null;
    let _quantity = null;

    Object.defineProperty(this, "name", {
      value: name,
      writable: false,
      enumerable: true,
      configurable: false,
    });

    Object.defineProperty(this, "price", {
      get() {
        return _price;
      },
      set(newPrice) {
        const validated = this._validateNumber(newPrice, "price", name, {
          allowFloat: true,
          min: 0,
        });
        if (validated !== null) _price = validated;
      },
      enumerable: true,
      configurable: true,
    });

    Object.defineProperty(this, "quantity", {
      get() {
        return _quantity;
      },
      set(newQuantity) {
        const validated = this._validateNumber(newQuantity, "quantity", name, {
          allowFloat: false,
          min: 1,
        });
        if (validated !== null) _quantity = validated;
      },
      enumerable: true,
      configurable: true,
    });

    this.price = price;
    this.quantity = quantity;
  }

  _validateNumber(
    value,
    fieldName,
    productName,
    { allowFloat = true, min = 0 }
  ) {
    const num = Number(value);
    const isValid = allowFloat ? Number.isFinite(num) : Number.isInteger(num);

    if (!isValid || num < min) {
      console.error(`Invalid ${fieldName} for "${productName}"`);
      console.log(`Please enter a valid ${fieldName}.`);
      return null;
    }

    return num;
  }

  isValid() {
    return (
      Number.isFinite(this.price) &&
      this.price >= 0 &&
      Number.isInteger(this.quantity) &&
      this.quantity > 0
    );
  }
}

module.exports = Product;
