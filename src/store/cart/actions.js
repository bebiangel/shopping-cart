const scope = `CART`;
const actions = {
  //
  FETCH_LIST: `${scope}_FETCH_LIST`,
  FETCH_LIST_SUCCESS: `${scope}_FETCH_LIST_SUCCESS`,
  FETCH: `${scope}_FETCH`,

  CHANGE_SIZE: `${scope}_CHANGE_SIZE`,
  CHANGE_COLOR: `${scope}_CHANGE_COLOR`,
  CHANGE_QUANTITY: `${scope}_CHANGE_QUANTITY`,

  CLEAR_LIST: `${scope}_CLEAR_LIST`,

  // ## Define Action Creators
  fetchList: () => ({
    type: actions.FETCH_LIST
  }),
  onChangeSize: () => ({}),

  clearList: () => ({
    type: actions.CLEAR_LIST
  })
};

export { scope };
export default actions;
