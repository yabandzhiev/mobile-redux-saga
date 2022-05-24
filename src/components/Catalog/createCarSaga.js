import { CREATE_CAR_REQUEST } from "./types";
import { createCarSuccess, createCarError, getCars } from "./actions";
import { put, take, call } from "redux-saga/effects";

export default function* createCarSaga(createCarApi) {
  while (true) {
    const createCarRequest = yield take(CREATE_CAR_REQUEST);
    if (createCarRequest.payload) {
      const { vehicle, accessToken } = createCarRequest.payload;
      yield call(createCar, createCarApi, vehicle, accessToken);
    }
  }
}

function* createCar(createCarApi, vehicle, accessToken) {
  try {
    const response = yield call(createCarApi.createCar, vehicle, accessToken);
    yield put(createCarSuccess(response.data));
    yield put(getCars());
  } catch (error) {
    yield put(createCarError(error));
  }
}
