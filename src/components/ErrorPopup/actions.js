import { ADD_ERROR_POPUP, REMOVE_ERROR_POPUP } from "./types";

export const addErrorPopup = (errorMessage) => {
  return {
    type: ADD_ERROR_POPUP,
    payload: errorMessage,
  };
};

export const removeErrorPopup = () => {
  return {
    type: REMOVE_ERROR_POPUP,
  };
};
