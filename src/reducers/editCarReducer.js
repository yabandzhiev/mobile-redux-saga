import { EDIT_CAR_SUCCESS, EDIT_CAR_ERROR } from "../components/Catalog/types";

const initialState = {
  editCarsError: "",
};

export const editCarReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_CAR_SUCCESS:
      return { ...state, editCarsError: "" };
    case EDIT_CAR_ERROR:
      return { ...state, editCarsError: action.payload };
    default:
      return state;
  }
};
