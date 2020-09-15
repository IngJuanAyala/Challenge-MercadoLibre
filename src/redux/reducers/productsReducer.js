import {
  FETCH_PRODUCTS_BEGIN,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_ITEM_SUCCESS,
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
        items: action.payload.res.results.items,
        item: null,
        breadCrumb: action.payload.res.results.categories,
        resultMessage: null,
      };

    case FETCH_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        item: action.payload.res.data.item,
        items: [],
        breadCrumb: action.payload.res.data.item.category,
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
