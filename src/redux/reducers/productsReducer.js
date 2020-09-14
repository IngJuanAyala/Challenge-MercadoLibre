import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "../actions/productsActions";

const initialState = {
  isFetching: false,
};

function getProducts(state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_BEGIN:
      return {
        ...state,
        isFetching: true,
        error: null,
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        result: action.payload.res,
        breadCrumb: "categorrriaaa",
        resultMessage: null,
      };

    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
        items: [],
      };

    default:
      return state;
  }
}

export default getProducts;
