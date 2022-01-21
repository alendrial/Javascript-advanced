const $showcase = document.querySelector('.showcase');

const renderGoodsItem = ({ title, price, img }) => {
  return `<div class="goods-item">
          <img src="${img}" alt="picture">
          <h3>${title}</h3>
          <p>${price}</p>
          </div>`
};

const renderGoodsList = (list) => {
  let goodsList = list.map(
          (item) =>  {
              return renderGoodsItem(item)
          }
      ).join('');

  $showcase.insertAdjacentHTML('beforeend', goodsList);
}

export default renderGoodsList

