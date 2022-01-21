import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";
import _ from "lodash";

const productList = getProductList(20);

renderGoodsList(productList);

