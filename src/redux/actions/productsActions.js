export const FETCH_PRODUCTS_BEGIN = "FETCH_PRODUCTS_BEGIN";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_ITEM_SUCCESS = "FETCH_ITEM_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

export const fetchProductsByParam = (props, productParam) => {
  const url_api = `http://localhost:3000/api/items?q=${productParam}`;

  props.dispatch({ type: FETCH_PRODUCTS_BEGIN });

  fetch(url_api, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.results && res.results.categories) {
        res.results.categories = assignBreadCrumb(res.results.categories);
      }

      props.dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: {
          res,
        },
      });
    })
    .catch((error) => {
      props.dispatch({
        type: FETCH_PRODUCTS_FAILURE,
        error: error.toString(),
      });
    });
};

export const fetchProductsById = (props, id) => {
  const url_api = `http://localhost:3000/api/items/${id}`;

  props.dispatch({ type: FETCH_PRODUCTS_BEGIN });

  fetch(url_api, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.data && res.data.item.category) {
        res.data.item.category = assignBreadCrumb(res.data.item.category);
      }

      props.dispatch({
        type: FETCH_ITEM_SUCCESS,
        payload: {
          res,
        },
      });
    })
    .catch((error) => {
      props.dispatch({
        type: FETCH_PRODUCTS_FAILURE,
        error: error.toString(),
      });
    });
};

const assignBreadCrumb = (breadCrumb) => {
  let breadCrumLt = [];
  if (breadCrumb !== "" && breadCrumb.includes(",")) {
    breadCrumLt = breadCrumb.split(",");
  } else {
    breadCrumLt.push(breadCrumb);
  }
  return breadCrumLt;
};
