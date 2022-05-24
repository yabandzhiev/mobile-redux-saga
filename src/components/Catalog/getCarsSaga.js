import { put, take, call } from "redux-saga/effects";
import { getCarsError, getCarsSuccess } from "./actions";
import { GET_CARS_REQUEST } from "./types";

export default function* getCarsSaga(getCarsApi) {
  while (true) {
    yield take(GET_CARS_REQUEST);

    yield call(getAllCars, getCarsApi);
  }
}

function* getAllCars(getCarsApi) {
  try {
    const response = yield call(getCarsApi.getCars);
    yield put(getCarsSuccess(response.data));
  } catch (error) {
    yield put(getCarsError(error));
  }
}
