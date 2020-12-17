import { ProxyState } from "../AppState.js"
import Product from "../Models/Product.js"


class ProductsService {
    addProduct() {
        console.log("addProduct")
    }

}
export const productsService = new ProductsService()