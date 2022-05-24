import { GET_CARS_ERROR, GET_CARS_SUCCESS } from "../components/Catalog/types";

export const initialState = {
  cars: [],
  getCarsError: "",
};

export const getCarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARS_SUCCESS:
      return {
        ...state,
        cars: action.payload.cars,
        getCarsError: "",
      };

    case GET_CARS_ERROR:
      return {
        ...state,
        cars: [],
        getCarsError: action.payload,
      };

    default:
      return state;
  }
};
