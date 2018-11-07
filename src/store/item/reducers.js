import actions from "./actions";

const initState = {
  list: [],
  formList: []
};

export default function itemReducer(state = initState, action) {
  //
  console.log(action);
  switch (action.type) {
    //
    case actions.FETCH:
      return {};

    case actions.FETCH_LIST:
      return { ...state, list: action.payload.goods };

    case actions.ADD_TO_CART:
      return {};

    case actions.CHANGE_COLOR:
      if (state.formList.some(form => form.id === action.id)) {
        return {
          ...state,
          formList: state.formList.map(item => {
            if (item.id === action.id) {
              return { ...item, color: action.color };
            } else {
              return item;
            }
          })
        };
      } else {
        return {
          ...state,
          formList: [...state.formList, { id: action.id, color: action.color }]
        };
      }

    default:
      return state;
  }
}
