import ProductCardView  from "./Productcartvue";

export default class CatalogPresenter {
    constructor(catalogmodel, cartmodel,){
        this.catalogmodel = catalogmodel;
        this.cartmodel = cartmodel;
        this.container = document.querySelector('.showcase');
        
        this.basket = [];
        this.cards = [];
        
        this.catalogmodel.subscribe('set', (catalog) => {
            this.cards = catalog.map((product) => new ProductCardView (product))
            this.cards.forEach((card) => card.render(this.container))

            console.log(this.cards)


            let basketAddBtn = document.querySelectorAll('.cardBtn')

            console.log(basketAddBtn)

            basketAddBtn.forEach((button)=>{button.addEventListener('click', (event) => {
                this.catalogmodel.addToCart(this.cards[event.target.id])
                console.log(this.cards[event.target.dataset.id])
            })}
            )

        })

        
        

        this.cartmodel.subscribe('set', (cart) => {
            this.basket = cart.map((product) => new ProductCardView (product))
            this.basket.forEach((card) => card.renderCart(basketElement))
            let basketRemoveBtn = document.querySelectorAll('.cardCartBtn');
            console.log(basketRemoveBtn);
            basketRemoveBtn.forEach((button)=>{button.addEventListener('click', (event) => {
                this.cartmodel.remove(this.basket[event.target.parentnode.id])
            })}
            )
        })

        let basketElement = document.querySelector('.basket');
        let basketBtn = document.querySelector(".bakset__button")
        basketBtn.addEventListener('click', function () {
        basketElement.classList.toggle('hidden')
        })
        
        
        
        
    }
    
    
        
    

    init() {
        this.catalogmodel.init()
        this.cartmodel.init()
        
    }


}