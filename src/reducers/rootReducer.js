import { combineReducers } from "redux";

// TODO:Import reducers
// import redirectReducer from "./redirectReducer";
import { getCarsReducer } from "./getCarsReducer";
import { registerReducer } from "./registerReducer";
import { userSessionReducer } from "./userSessionReducer";
import { createCarReducer } from "./createCarReducer";
import { editCarReducer } from "./editCarReducer";
import { deleteCarReducer } from "./deleteCarReducer";

export default function createReducer() {
  const rootReducer = combineReducers({
    // TODO: set reducers
    // redirect: redirectReducer,
    register: registerReducer,
    getCars: getCarsReducer,
    userSession: userSessionReducer,
    createCar: createCarReducer,
    editCar: editCarReducer,
    deleteCar: deleteCarReducer,
  });
  return rootReducer;
}
