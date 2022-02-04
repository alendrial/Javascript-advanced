import {send, senPromise} from './utils';

export default class ApiHandler {
  constructor(apiUrl) {
    this.apiUrl = apiUrl
  }

  getCatalog(onSuccess, onError) {
    send(onError, onSuccess, `${this.apiUrl}/catalog`)
  }

  getCart(onSuccess, onError) {
    return sendPromise(`${this.apiUrl}/cart`)
      .then((data) => {
        return JSON.stringify(data)
      })
  }

  addToCart(onSuccess, onError, data) {
    send(onError, onSuccess, `${this.apiUrl}/cart`, 'POST', JSON.stringify(data), {"Content-Type": "application/json"})
  }

  removeFromCart(onSuccess, onError, data) {
    send(onError, onSuccess, `${this.apiUrl}/cart`, 'DELETE', JSON.stringify(data), {"Content-Type": "application/json"})
  }

  /*
  addToCart(apiUrl, data) {
    return fetch(`${this.apiUrl}`, {
      method: 'PUT', 
      body: JSON.stringify(data)
    }).then(result => result.json())
  }
  */
  /*
  removeFromCart(apiUrl) {
    return fetch(`${this.apiUrl}`,{
      method: 'DELETE',
    }).then(result => result.json())
  }
  */
}