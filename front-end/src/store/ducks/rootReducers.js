import { combineReducers } from 'redux';

import userReducer from './user';
import sideBarHideReducer from './sideBarHide';
import cartReducer from './productsCart';
import productsReducer from './products';
import ordersReducer from './orders';

const rootReducer = combineReducers({
  userReducer,
  sideBarHideReducer,
  cartReducer,
  productsReducer,
  ordersReducer,
});

export default rootReducer;
