import { ADD_ERROR_POPUP, REMOVE_ERROR_POPUP } from "../components/ErrorPopup/types";

const initialState = {
  open: false,
  error: "",
};

export const errorPopupReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ERROR_POPUP:
      return {
        ...state,
        open: true,
        error: action.payload,
      };

    case REMOVE_ERROR_POPUP:
      return {
        ...state,
        open: false,
        error: "",
      };

    default:
      return state;
  }
};
