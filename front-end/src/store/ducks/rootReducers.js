import { combineReducers } from 'redux';

import userReducer from './user';
import sideBarHideReducer from './sideBarHide';
import cartReducer from './productsCart';
import productsReducer from './products';

const rootReducer = combineReducers({
  userReducer,
  sideBarHideReducer,
  cartReducer,
  productsReducer,
});

export default rootReducer;
