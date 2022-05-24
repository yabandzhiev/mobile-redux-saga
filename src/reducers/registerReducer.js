import { REGISTER_ERROR, REGISTER_SUCCESS } from "../components/Auth/Register/types";

export const initialState = {
  registerError: "",
};

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerError: "",
      };

    case REGISTER_ERROR:
      return {
        ...state,
        registerError: action.payload,
      };

    default:
      return state;
  }
};
