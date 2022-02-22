import ProductList from "./Productlist";
import Product from "./Product";


export default class Catalog extends ProductList {
    constructor(api_url, cartmodel){
        super() 
        this.api_url = api_url;
        this.cartmodel = cartmodel;
    }

    init() {
        fetch(`${this.api_url}/catalog`)
            .then((response) => { 
                return response.json()
            })
            .then((data) => {
                this.set(data.map(({id, title, price}) => new Product(id, title, price)))
            })
            

    }

    addToCart(id){
        const product = this.getById(id)
        this.cartmodel.add(product)
    }
}   
