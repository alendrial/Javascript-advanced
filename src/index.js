import ApiHandler from './ApiHandler.js';
import CartModel from './CartModel.js';
import ShowcaseModel from './ShowcaseModel.js';
import EventEmitter from './EventEmitter.js'

import _ from "lodash";
import '../public/css/style.scss';

const API_URL = 'http://localhost:3000/api/v1'

const api = new ApiHandler(API_URL)
const eventEmmiter = new EventEmitter()

const cart = new CartModel(api, eventEmmiter)
const showcase = new ShowcaseModel(api, eventEmmiter, cart)

eventEmmiter.subscribe('showcaseFeched', (data) => {
  console.log(data)
})

eventEmmiter.subscribe('cartFeched', (data) => {
  console.log(data)
})

showcase.fetch()
cart.fetch()
/*
cart.fetch()
  .then((data) => {
    console.log('данные получены')
  })
  .catch((err) => {
    console.log(err)
  })
*/



import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";
import { send } from './utils.js'
/*
import _ from "lodash";
import '../public/css/style.scss';


//const productList = getProductList(20);

//renderGoodsList(productList);


const API_URL = 'http://localhost:3000/api/v1'
*/
let productList = [];
//let cart = [];

send((error) => { console.log(err) }, (res) => {
    let list = JSON.parse(res);
    productList = list;
    renderGoodsList(productList);
}, `${API_URL}/catalog`);
/*
let buyed = {id: 5, title: "new", price: 999};

send((error) => { console.log(err) }, (res) => {
  cart.push(buyed)
}, `${API_URL}/cart`, 'DELETE', JSON.stringify(buyed), {"Content-Type": "application/json"});
*/
/*
send((error) => { console.log(err) }, (res) => {
  cart.push(buyed)
}, `${API_URL}/cart`, 'POST', JSON.stringify(buyed), {"Content-Type": "application/json"});
*/
