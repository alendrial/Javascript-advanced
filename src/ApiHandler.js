import res from 'express/lib/response'
import { result } from 'lodash'
import { send, sendPromise } from './utils'

export default class ApiHandler {
  constructor(apiUrl) {
    this.apiUrl = apiUrl
  }

  getCatalog(onSuccess, onError) {
    send(onError, onSuccess, `${this.apiUrl}/catalog`)
  }
  /*
  getCart(onSuccess, onError) {
    send(onError, onSuccess, `${this.apiUrl}/cart`)
  }
  */
  getCart(onSuccess, onError) {
    return sendPromise(`${this.apiUrl}/cart`)
    .then((data) => {
      return JSON.stringify(data)
    })
  }
  

  // addToCart(onSuccess, onError, data) {
  //  send(onError, onSuccess, `${this.apiUrl}/cart`, 'POST', JSON.stringify(data), {"Content-Type": "application/json"})
  //}

    addToCart(apiUrl, data) {
      return fetch(`${this.apiUrl}`, {
        method: 'PUT', 
        headers: {
          "Content-Type": "application/json"
         },
         body: JSON.stringify(data)
        }).then(result => result.json())
    }

  //removeFromCart(onSuccess, onError, data) {
  //  send(onError, onSuccess, `${this.apiUrl}/cart`, 'DELETE', JSON.stringify(data), {"Content-Type": "application/json"})
  //}
     removeFromCart(apiUrl) {
       return fetch(`${this.apiUrl}`,{
         method: 'DELETE',
         headers: {
          "Content-Type": "application/json"
         },
       }).then(result => result.json())
     }


}
