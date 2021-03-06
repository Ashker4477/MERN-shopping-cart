const {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_ADD_REQUEST,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_ADD_FAIL,
} = require("../constants/productConstants");

export const productListReducer = (state = {loading:true, products:[] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
export const productDetailsReducer = (state = {loading:true, product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true,};
    case PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, product: action.payload};
    case PRODUCT_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload};
    default:
      return state;
  }
};
export const productAddReducer = (state = {loading:true, product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_ADD_REQUEST:
      return { ...state, loading: true,};
    case PRODUCT_ADD_SUCCESS:
      return { ...state, loading: false, product: action.payload};
    case PRODUCT_ADD_FAIL:
      return { ...state, loading: false, error: action.payload};
    default:
      return state;
  }
};
