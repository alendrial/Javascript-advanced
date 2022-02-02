import {send} from './utils.js'
export default class ApiHandler {
  constructor(apiUrl) {
    this.apiUrl = apiUrl
  }

  getCatalog(onSuccess, onError) {
    this.send(onError, onSuccess, `${this.apiUrl}/catalog`)
  }

  getCart(onSuccess, onError) {
    this.send(onError, onSuccess, `${this.apiUrl}/cart`)
  }

  addToCart(onSuccess, onError, data) {
    this.send(onError, onSuccess, `${this.apiUrl}/cart`, 'POST', JSON.stringify(data), {"Content-Type": "application/json"})
  }

  removeFromCart(onSuccess, onError, data) {
    this.send(onError, onSuccess, `${this.apiUrl}/cart`, 'DELETE', JSON.stringify(data), {"Content-Type": "application/json"})
  }
}