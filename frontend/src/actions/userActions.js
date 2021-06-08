import axios from "axios";
import {
  USER_SINGIN_FAIL,
  USER_SINGIN_SUCCESS,
  USER_SINGOUT,
} from "../constants/userConstants";

export const singin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SINGIN_SUCCESS, payload: { email, password } });
  try {
    const { data } = await axios.post("/api/users/singin", { email, password });
    dispatch({ type: USER_SINGIN_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_SINGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const singout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  dispatch({ type: USER_SINGOUT });
};
