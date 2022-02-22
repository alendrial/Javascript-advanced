
import Cart from './Cart'
import Catalog from './Catalog'
import CatalogPresenter from './CatalogPresent'
import _ from "lodash";
import '../public/css/style.scss';

const API_URL = '/api/v1'


const cartmodel = new Cart(API_URL);
const catalogmodel = new Catalog(API_URL, cartmodel);

const catalogpresenter = new CatalogPresenter(catalogmodel, cartmodel);

//cartmodel.init();
//catalogmodel.init();

catalogpresenter.init();