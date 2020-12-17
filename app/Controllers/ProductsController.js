import { ProxyState } from "../AppState.js"
import { productsService } from "../Services/ProductsService.js"

function _drawProducts() {
    let products = ProxyState.products
    let template = ''
    products.forEach(product => {
        template += product.Template
    })
    document.getElementById('products').innerHTML = template
}
export default class ProductsController {
    constructor() {
        ProxyState.on("products", _drawProducts)
        _drawProducts()
    }
    addProduct() {
        productsService.addProduct()
    }


    createProduct() {
        productsService.createProduct(newProduct)
    }
}