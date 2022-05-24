import { put, call, take } from "redux-saga/effects";
import { logoutError, logoutSuccess } from "./actions";
import { LOGOUT_REQUEST } from "./types";

export default function* logoutSaga(logoutApi) {
  while (true) {
    const logoutAction = yield take(LOGOUT_REQUEST);
    const accessToken = logoutAction.payload.accessToken;
    yield call(logoutUser, logoutApi, accessToken);
  }
}

function* logoutUser(logoutApi, accessToken) {
  try {
    yield call(logoutApi.logout, accessToken);
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutError());
  }
}
