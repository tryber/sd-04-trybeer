/** SALES REDUX */

import SalesService from '../../services/salesService';

/** Actions Types */

export const Types = {
  SALES_FETCHED: 'SALES_FETCHED',
  SALES_FETCHING: 'SALES_FETCHING',
  ERROR: 'ERROR',
};

/** Reducers */

const initialState = {
  isFetching: false,
  sales: {
    pending: [],
    delivered: [],
  },
};

const salesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.SALES_FETCHING:
      return { ...state, isFetching: payload.status };
    case Types.SALES_FETCHED:
      return {
        ...state,
        sales: {
          pending: [
            ...payload.sales.filter((sale) => sale.status === 'Pendente'),
          ],
          delivered: [
            ...payload.sales.filter((sale) => sale.status === 'Entregue'),
          ],
        },
      };
    case Types.ERROR:
      return { ...state, errors: payload.error };
    default:
      return state;
  }
};

/** Actions */
export const salesFetching = (status) => ({
  type: Types.SALES_FETCHING,
  payload: {
    status,
  },
});

export const salesFetched = (sales) => ({
  type: Types.SALES_FETCHED,
  payload: {
    sales,
  },
});

export const hasErrored = (error = []) => ({
  type: Types.ERROR,
  payload: error,
});

/** Actions Creators */

export const getSales = (authToken) => (dispatch) => {
  dispatch(salesFetching(true));

  SalesService.getSales(authToken)
    .then((response) => {
      if (response.status === 200) {
        dispatch(salesFetched(response.data));
        dispatch(salesFetching(false));
      }
    })
    .catch((error) => dispatch(hasErrored(error)));
};

export default salesReducer;
