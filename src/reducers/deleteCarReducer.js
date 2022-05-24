import { REMOVE_CAR_SUCCESS, REMOVE_CAR_ERROR } from "../components/Catalog/types";

const initialState = {
  removeCarError: "",
};

export const deleteCarReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_CAR_SUCCESS:
      return { ...state, removeCarError: "" };
    case REMOVE_CAR_ERROR:
      return { ...state, removeCarError: action.payload };
    default:
      return state;
  }
};
