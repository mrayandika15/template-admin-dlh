import { authActions } from ".";
import { login } from "../../services";

export const loginAsnyc = (payload) => async (dispatch) => {
  const res = await login(payload);

  console.log(res.jwt);

  dispatch(authActions.login(res.jwt));
};
