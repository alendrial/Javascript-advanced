import { random } from 'lodash'

const PRODUCTS = [
  'Shirt', 
  'Shoes', 
  'Hat',
  'Jacket',
  'Socks'
]

const COLORS = [
  'green',
  'red',
  'orange',
  'black',
  'white'
]

let lastIndex = 0;
let img = 'https://placeimg.com/100/150/arch?t=${random(0,999)}';

function getProductName() {
  const product = PRODUCTS[random(0, PRODUCTS.length - 1)]
  const color = COLORS[random(0, COLORS.length - 1)]

  return `${product} ${color}`;
}

function getProduct() {
  return {
    id: ++lastIndex,
    img: `${img}`,
    title: getProductName(),
    price: random(99, 999)
  }
}

function getProductList(count) {
  let products = [];

  for(let i = 0; i < count; i++) {
    products.push(getProduct());
  }

  return products
}

export default getProductList;