const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },

    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].bundle.js',
    },
    module: {
      rules: [{
        test: /\.s[ac]ss$/i,
        use: [
          miniCss.loader,
          'css-loader',
          'sass-loader',
        ]
      }]
    },
    plugins: [
      new HtmlWebpackPlugin({
          title: 'GeekBrains Shop JS2 by MashkinM',
          shoptitle: '<div class="header__menu"><div><h1>MashkinMV</h1></div><div><button class="bakset__button">Basket</button><div class="basket"><div class="basketRow basketHeader"><div>Название товара</div><div>Количество</div><div>Цена за шт.</div> <div>Итого</div></div><div class="basketTotal">Товаров в корзине на сумму:$<span class="basketTotalValue">0</span></div></div></div></div>',
          shopcontent: `<div class="showcase__container"><div class="showcase "></div></div>`,
          template: path.resolve(__dirname, './public/template.html'), // шаблон
          filename: 'index.html', // название выходного файла
      }),
      new miniCss({
        filename: 'style.css',
      }),
      new CleanWebpackPlugin(),
    ]
}