const scope = `ITEM`;
const actions = {
  //
  FETCH_LIST: `${scope}_FETCH_LIST`,
  FETCH_LIST_SUCCESS: `${scope}_FETCH_LIST_SUCCESS`,
  FETCH: `${scope}_FETCH`,

  ADD_TO_CART: `${scope}_ADD_TO_CART`,

  // ## Define Action Creators

  addToCart: ({ items }) => ({})
};

export { scope };
export default actions;
