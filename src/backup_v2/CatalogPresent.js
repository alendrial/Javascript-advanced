import ProductCardView  from "./Productcartvue";

export default class CatalogPresenter {
    constructor(catalogmodel, cartmodel,){
        this.catalogmodel = catalogmodel;
        this.cartmodel = cartmodel;
        this.container = document.querySelector('.showcase');
        this.cards = [];
        
        this.catalogmodel.subscribe('set', (catalog) => {
            this.cards = catalog.map((product) => new ProductCardView (product))
            this.cards.forEach((card) => card.render(this.container))
        })
    }


    init() {
        this.catalogmodel.init()
        this.cartmodel.init()
    }
}