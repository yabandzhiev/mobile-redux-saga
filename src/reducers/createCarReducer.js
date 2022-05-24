import { CREATE_CAR_SUCCESS, CREATE_CAR_ERROR } from "../components/Catalog/types";

const initialState = {
  createCarError: "",
};

export const createCarReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CAR_SUCCESS:
      return { ...state, createCarError: "" };
    case CREATE_CAR_ERROR:
      return { ...state, createCarError: action.payload };
    default:
      return state;
  }
};
