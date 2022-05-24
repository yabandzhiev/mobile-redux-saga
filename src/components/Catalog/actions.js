import {
  GET_CARS_REQUEST,
  GET_CARS_SUCCESS,
  GET_CARS_ERROR,
  REMOVE_CAR_REQUEST,
  REMOVE_CAR_SUCCESS,
  REMOVE_CAR_ERROR,
  EDIT_CAR_REQUEST,
  EDIT_CAR_SUCCESS,
  EDIT_CAR_ERROR,
  CREATE_CAR_REQUEST,
  CREATE_CAR_SUCCESS,
  CREATE_CAR_ERROR,
} from "./types";

// ---------------- GET_CARS_REQUEST
export const getCars = () => {
  return {
    type: GET_CARS_REQUEST,
  };
};

export const getCarsSuccess = (cars) => {
  return {
    type: GET_CARS_SUCCESS,
    payload: {
      cars,
    },
  };
};
export const getCarsError = (errorMessage) => {
  return {
    type: GET_CARS_ERROR,
    payload: errorMessage,
  };
};

// ---------------- REMOVE_CARS_REQUEST

export const removeCar = (carId, userId, accessToken) => {
  return {
    type: REMOVE_CAR_REQUEST,
    payload: {
      carId,
      userId,
      accessToken,
    },
  };
};

export const removeCarSuccess = (statusMessage) => {
  return {
    type: REMOVE_CAR_SUCCESS,
    payload: { statusMessage },
  };
};

export const removeCarError = (errorMessage) => {
  return {
    type: REMOVE_CAR_ERROR,
    payload: errorMessage,
  };
};

// ---------------- EDIT_CAR_REQUEST

export const editCar = (newData, userId, accessToken) => {
  return {
    type: EDIT_CAR_REQUEST,
    payload: {
      newData,
      userId,
      accessToken,
    },
  };
};

export const editCarSuccess = (updatedCar) => {
  return {
    type: EDIT_CAR_SUCCESS,
    payload: {
      updatedCar,
    },
  };
};

export const editCarError = (errorMessage) => {
  return {
    type: EDIT_CAR_ERROR,
    payload: errorMessage,
  };
};

// ---------------- CREATE_CAR_REQUEST
export const createCar = (vehicle, accessToken) => {
  return {
    type: CREATE_CAR_REQUEST,
    payload: {
      vehicle,
      accessToken,
    },
  };
};

export const createCarSuccess = (createCar) => {
  return {
    type: CREATE_CAR_SUCCESS,
    payload: {
      createCar,
    },
  };
};

export const createCarError = (errorMessage) => {
  return {
    type: CREATE_CAR_ERROR,
    payload: errorMessage,
  };
};
