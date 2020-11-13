import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from '../actions';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  const { name, quantity } = payload;
  const cartList = { ...state };

  switch (type) {
    case UPDATE_QUANTITY:
      cartList[name].quantity += quantity;
      break;

    case REMOVE_FROM_CART:
      delete cartList[name];
      break;

    case ADD_TO_CART:
      cartList[name] = payload;
      break;

    default:
      break;
  }
  return cartList;
};
