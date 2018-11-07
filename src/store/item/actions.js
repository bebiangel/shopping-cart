import { firebaseGoodsFetchList } from "./api";

const scope = `ITEM`;
const actions = {
  //
  FETCH_LIST: `${scope}_FETCH_LIST`,
  FETCH_LIST_SUCCESS: `${scope}_FETCH_LIST_SUCCESS`,
  FETCH: `${scope}_FETCH`,

  ADD_TO_CART: `${scope}_ADD_TO_CART`,

  CHANGE_COLOR: `${scope}_CHANGE_COLOR`,
  CHANGE_SIZE: `${scope}_CHANGE_SIZE`,

  CLEAR_LIST: `${scope}_CLEAR_LIST`,

  // ## Define Action Creators
  fetchList: () => firebaseGoodsFetchList(),
  addToCart: ({ items }) => ({}),

  onChangeColor: ({ id, color }) => ({
    type: actions.CHANGE_COLOR,
    id,
    color
  }),

  clearList: () => ({
    type: actions.CLEAR_LIST
  })
};

export { scope };
export default actions;
