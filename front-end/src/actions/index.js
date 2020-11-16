export const INC_QUANTITY = 'INC_QUANTITY';
export const DEC_QUANTITY = 'DEC_QUANTITY';
export const SAVE_CART = 'SAVE_CART';

export const incQuantity = (payload) => ({
  type: INC_QUANTITY,
  payload,
});

export const decQuantity = (payload) => ({
  type: DEC_QUANTITY,
  payload,
});

export const saveCart = (payload) => ({
  type: SAVE_CART,
  payload,
});
