import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from "./types";

export const loginUser = (username, password) => {
  return {
    type: LOGIN_REQUEST,
    payload: {
      username,
      password,
    },
  };
};

export const loginSuccess = (accessToken, userId, username, firstName, lastName) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      accessToken,
      userId,
      username,
      firstName,
      lastName,
    },
  };
};

export const loginError = (errorMessage) => {
  return {
    type: LOGIN_ERROR,
    payload: errorMessage,
  };
};
