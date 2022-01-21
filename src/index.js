import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";
import _ from "lodash"
import multiplay from "./multiplay"

const productList = getProductList(20);

renderGoodsList(productList);
