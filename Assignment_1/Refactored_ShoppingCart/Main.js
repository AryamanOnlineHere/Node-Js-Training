const readline = require("readline");
const Product = require("./Product");
const ShoppingCart = require("./ShoppingCart");
const cart = new ShoppingCart();

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function showMenu() {
  console.log(`
        ==== Shopping Cart Menu ====
        1.Add Product
        2.Remove Product
        3.show Cart
        4.Show Total Price
        5.Exit  
          `);

  r1.question("choose an option", (choice) => {
    switch (choice) {
      case "1":
        r1.question("Enter product name:", (name) => {
          r1.question("Enter price:", (price) => {
            r1.question("Enter quantity:", (quantity) => {
              const product = new Product(
                name,
                parseFloat(price),
                parseInt(quantity)
              );
              cart.addProduct(product);
              showMenu();
            });
          });
        });
        break;
      case "2":
        r1.question("enter the product anme to remove:", (name) => {
          //   const productToRemove = cart.products.find((p) => p.name === name);
          if (cart.products.has(name)) {
            cart.removeProduct(name);
          } else {
            console.log(`Product "${name}" not found in cart.`);
          }
          showMenu();
        });
        break;
      case "3":
        cart.listProducts();
        showMenu();
        break;
      case "4":
        console.log("Total Price:", +cart.calculateTotal());
        showMenu();
        break;
      case "5":
        console.log("Exitting... Thank you ");
        r1.close();
        break;
      default:
        console.log("Invalid option Try again.");
        showMenu();
        break;
    }
  });
}

console.log("=== Welcome to Shopping cart ===");
showMenu();
