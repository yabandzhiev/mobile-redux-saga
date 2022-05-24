import { take, call, put } from "redux-saga/effects";

import { REMOVE_CAR_REQUEST } from "./types.js";
import { removeCarSuccess, removeCarError } from "./actions";

export default function* deleteCarSaga(deleteCarApi) {
  while (true) {
    const removeCarRequest = yield take(REMOVE_CAR_REQUEST);
    if (removeCarRequest.payload) {
      const { carId, userId, accessToken } = removeCarRequest.payload;
      yield call(removeCar, deleteCarApi, carId, userId, accessToken);
    }
  }
}

function* removeCar(deleteCarApi, carId, userId, accessToken) {
  try {
    const response = yield call(deleteCarApi.deleteCar, carId, userId, accessToken);
    yield put(removeCarSuccess(response.data));
  } catch (error) {
    yield put(removeCarError(error));
  }
}
