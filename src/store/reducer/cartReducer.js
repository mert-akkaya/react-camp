import { ADD_TO_CART, REMOVE_FROM_CART,REDUCE_THE_AMOUNT } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";
import { toast } from "react-toastify";

const initialState = {
  cartItems: cartItems,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItems.find((c) => c.product.id === payload.id);
      if (product) {
        product.quantity++;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { quantity: 1, product: payload }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((c) => c.product.id !== payload.id),
      };
    
    case REDUCE_THE_AMOUNT:
        let getProduct = state.cartItems.find((c) => c.product.id === payload.id);
        getProduct.quantity --;
        if (getProduct.quantity<1) {
            toast.warning("Miktar 0 dan küçük olamaz");
        }
        return{
            ...state
        }
    default:
      return state;
  }
}
