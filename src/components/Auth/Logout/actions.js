import { LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_ERROR } from "./types";

export const logoutUser = (accessToken) => {
  return {
    type: LOGOUT_REQUEST,
    payload: { accessToken },
  };
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const logoutError = (errorMessage) => {
  return {
    type: LOGOUT_ERROR,
    payload: errorMessage,
  };
};
