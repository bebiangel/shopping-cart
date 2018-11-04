import actions from "./actions";

const initState = {
  list: [],

  shipping: "",
  itemsPrice: 0,
  shippingPrice: 0,
  totalPrice: 0
};

export default function cartReducer(state = initState, action) {
  //
  switch (action.type) {
    //
    case actions.CHANGE_SIZE:
      return {};

    case actions.CHANGE_COLOR:
      return {};

    case actions.CHANGE_QUANTITY:
      return {};

    default:
      return state;
  }
}
