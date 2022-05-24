import { put, take, call } from "redux-saga/effects";

import { EDIT_CAR_REQUEST } from "./types";
import { editCarSuccess, editCarError } from "./actions";

export default function* editCarSaga(editCarApi) {
  while (true) {
    const editCarRequest = yield take(EDIT_CAR_REQUEST);
    if (editCarRequest.payload) {
      const { newData, userId, accessToken } = editCarRequest.payload;

      yield call(editCar, editCarApi, newData, userId, accessToken);
    }
  }
}

function* editCar(editCarApi, newData, userId, accessToken) {
  try {
    const response = yield call(editCarApi.editCar, newData, userId, accessToken);
    yield put(editCarSuccess(response.data));
  } catch (error) {
    yield put(editCarError(error));
  }
}
