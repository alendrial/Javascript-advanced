const $showcase = document.querySelector('.showcase');

const renderGoodsItem = ({ title, price }) => {
  return `<div class="goods-item">
          <img src="https://placeimg.com/100/100/arch?t=${random(0, 1000)}" alt="picture">
          <h3>${title}</h3>
          <p>${price}</p>
          </div>`;
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

