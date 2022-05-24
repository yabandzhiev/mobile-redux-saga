import { LOGIN_REQUEST } from "./types";
import { loginSuccess, loginError } from "./actions";
import { put, take, call } from "redux-saga/effects";
import { addErrorPopup, removeErrorPopup } from "../../ErrorPopup/actions";

export default function* loginSaga(loginApi) {
  while (true) {
    const loginRequest = yield take(LOGIN_REQUEST);
    if (loginRequest.payload) {
      const { username, password } = loginRequest.payload;
      yield call(authorizeUser, loginApi, username, password);
    }
  }
}

function* authorizeUser(loginApi, username, password) {
  try {
    const response = yield call(loginApi.login, username, password);
    const accessToken = response.data.jwtToken;
    const successResponse = response.data.user;
    yield put(
      loginSuccess(
        accessToken,
        successResponse.id,
        successResponse.username,
        successResponse.firstName,
        successResponse.lastName
      )
    );
    yield put(removeErrorPopup());
  } catch (error) {
    yield put(addErrorPopup("Incorrect user details"));
    yield put(loginError(error));
  }
}
