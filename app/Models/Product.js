
export default class Product {
    constructor({
        id, name, price, description, imgUrl, quantity
    }) {
        this.id = id
        this.name = name
        this.price = price
        this.description = description
        this.imgUrl = imgUrl
        this.quantity = quantity
    }
    get Template() {
        return `
        <div id="app"></div>
        <div class="col-md-4 col-6">
            <div class="card text-left">
                <img class="card-img-top" src="${this.imgUrl}" alt="">
                <div class="card-body">
                    <h3 class="card-title">${this.name}</h3>
                    <h3 class="card-price">${this.price}</h3>
                    <p class="card-text text-weight-light">${this.description}</p>
                    <button class="btn btn-success text-right"
                        onclick="app.productController.addProduct('${this.id}')">Add to Cart</button>
                    <h5 class="card-quantity text-left">Stock: ${this.quantity}</h5>
                </div>
            </div>
        </div>
        
        
        `
    }
}