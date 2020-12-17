import Product from "./Models/Product.js"
import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type  {Product[]} */
  products = [
    new Product({
      id: 'carhart', name: 'jacket 3', price: 70, description: 'warm jacket', imgUrl: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQLp0jaXA3-JTImJbBNJz-OlF-FI08zf4_fRJcQSY_fd-ugJ-oKkPWghOomc_VWYIzHS5mWVnLbOUE&usqp=CAc", quantity: 50
    }),
    new Product({
      id: 'icepick', name: 'icepick 101', price: 25, description: 'cool tool to climb up ice sculptures', imgUrl: "https://images-na.ssl-images-amazon.com/images/I/31QiwKre0wL._AC_SY450_.jpg", quantity: 45
    }),
    new Product({
      id: 'tire chains', name: 'tire chains 204', price: 100, description: 'to help your car not make you stranded', imgUrl: "https://images-na.ssl-images-amazon.com/images/I/31QiwKre0wL._AC_SY450_.jpg", quantity: 67
    })
  ]
  /** @type {Product[]} */
  cart = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
