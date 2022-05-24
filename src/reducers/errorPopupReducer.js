import { ADD_ERROR_POPUP, REMOVE_ERROR_POPUP } from "../components/ErrorPopup/types";

const initialState = {
  errors: "",
};

export const errorPopupReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ERROR_POPUP:
      return {
        ...state,
        errors: action.payload,
      };

    case REMOVE_ERROR_POPUP:
      return {
        ...state,
        errors: "",
      };

    default:
      state;
  }
};
