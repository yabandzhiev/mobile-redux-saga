import { put, take, call } from "redux-saga/effects";
import { addErrorPopup, removeErrorPopup } from "../../ErrorPopup/actions";
import { loginUser } from "../Login/actions";
import { registerError, registerSuccess } from "./actions";
import { REGISTER_REQUEST } from "./types";

export default function* registerSaga(registerApi) {
  while (true) {
    const registerRequest = yield take(REGISTER_REQUEST);
    if (registerRequest.payload) {
      const { username, password, firstName, lastName } = registerRequest.payload;
      yield call(createUser, registerApi, username, password, firstName, lastName);
    }
  }
}

function* createUser(registerApi, username, password, firstName, lastName) {
  try {
    const response = yield call(
      registerApi.register,
      username,
      password,
      firstName,
      lastName
    );
    const successResponse = response.data;
    yield put(
      registerSuccess(
        successResponse.userId,
        successResponse.username,
        successResponse.firstName,
        successResponse.lastName
      )
    );

    //call login request
    if (response) {
      yield put(removeErrorPopup());

      yield put(loginUser(username, password));
    }
  } catch (error) {
    yield put(addErrorPopup("User already exists!"));

    yield put(registerError(error));
  }
}
