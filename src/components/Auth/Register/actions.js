import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_ERROR } from "./types";

export const registerUser = (username, password, firstName, lastName) => {
  return {
    type: REGISTER_REQUEST,
    payload: {
      username,
      password,
      firstName,
      lastName,
    },
  };
};

export const registerSuccess = (userId, username, firstName, lastName) => {
  return {
    type: REGISTER_SUCCESS,
    payload: {
      userId,
      username,
      firstName,
      lastName,
    },
  };
};

export const registerError = (errorMessage) => {
  return {
    type: REGISTER_ERROR,
    payload: errorMessage,
  };
};
