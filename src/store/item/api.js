import actions from "./actions";
// import firestore from "../../settings/firebase";
import { goodsRef } from "../../settings/firebase";

export const firebaseGoodsFetchList = () => async dispatch => {
  goodsRef.on("value", snapshot => {
    console.log(snapshot.val());
    dispatch({
      type: actions.FETCH_LIST,
      payload: snapshot.val()
    });
  });
};
