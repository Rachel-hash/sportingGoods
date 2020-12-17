import ProductsController from "./Controllers/ProductsController.js"
class App {
  jacketsController = new ProductsController()
}

window["app"] = new App();
