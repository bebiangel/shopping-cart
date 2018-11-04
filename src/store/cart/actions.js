const scope = `CART`;
const actions = {
  //
  FETCH_LIST: `${scope}_FETCH_LIST`,
  FETCH_LIST_SUCCESS: `${scope}_FETCH_LIST_SUCCESS`,
  FETCH: `${scope}_FETCH`,

  CHANGE_SIZE: `${scope}_CHANGE_SIZE`,
  CHANGE_COLOR: `${scope}_CHANGE_COLOR`,
  CHANGE_QUANTITY: `${scope}_CHANGE_QUANTITY`
};

export { scope };
export default actions;
