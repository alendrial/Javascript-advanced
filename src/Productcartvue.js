export default class ProductCardView {
  constructor(data) {
    this.data = data
    this.element = null
  }


  render(container) {
    container.append(this.getElement())
  }
  renderCart(container) {
    container.append(this.getElementCart())
  }

  getId() {
    return this.data.id
    
  }

  getHtml() {
    return `<img src="" alt="Picture-Error"><h3>${this.data.title}</h3><p>${this.data.price}</p><button class="cardBtn">Add to Cart</button>`
  }
  getHtmlCart() {
    return `<img src="" alt="Picture-Error"><h3>${this.data.title}</h3><p>${this.data.price}</p><button class="cardCartBtn">Remove from Cart</button>`
  }

  getElement() {
    if(this.element) return this.element

    this.element = document.createElement('DIV');
    this.element.classList.add('card')
    this.element.insertAdjacentHTML('afterbegin', this.getHtml())

    return this.element
  
  }
  getElementCart() {
    if(this.element) return this.element

    this.element = document.createElement('DIV');
    this.element.classList.add('cardCart')
    this.element.insertAdjacentHTML('afterbegin', this.getHtmlCart())

    return this.element
  
  }


 

  update(data) {
    this.data = data;
    this.element.textContent = ''
    this.element.insertAjacentHtml('afterbegin', this.getHtml())
    
  }

  
}