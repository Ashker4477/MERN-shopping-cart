import {
  ADD_PAYEMENT_METHOD,
  ADD_SHIPPING_ADDRESS,
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
} from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItems.find(
        (cartItem) => cartItem.product === item.product
      );
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === item.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case REMOVE_FROM_CART:
      const index = state.cartItems.findIndex(
        (basketItem) => basketItem.product === action.id
      );
      let newBasket = { ...state, cartItems: [...state.cartItems] };

      if (index >= 0) {
        newBasket.cartItems.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id} as its not in cart!)`
        );
      }
      return newBasket;
    case CLEAR_CART:
      return { ...state, cartItems: [] };
    case ADD_SHIPPING_ADDRESS:
      return { ...state, shippingAdress: action.payload };
    case ADD_PAYEMENT_METHOD:
      return { ...state, payementMethod: action.payload };
    default:
      return state;
  }
};
