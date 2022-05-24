import { all } from "redux-saga/effects";
// Saga
// **** TODO: IMPORT SAGA FILES
import loginSaga from "../components/Auth/Login/saga";
import logoutSaga from "../components/Auth/Logout/saga";
import registerSaga from "../components/Auth/Register/saga";
import createCarSaga from "../components/Catalog/createCarSaga";
import deleteCarSaga from "../components/Catalog/deleteCarSaga";
import editCarSaga from "../components/Catalog/editCarSaga";
import getCarsSaga from "../components/Catalog/getCarsSaga";
// API
// **** TODO: IMPORT API
import { api as loginApi } from "../api/loginApi";
import { api as logoutApi } from "../api/logoutApi";
import { api as registerApi } from "../api/registerApi";
import { api as editCarsApi } from "../api/editCarsApi";
import { api as getCarsApi } from "../api/getCarsApi";
import { api as deleteCarApi } from "../api/deleteCarApi";
import { api as createCarApi } from "../api/createCarApi";
/** Root saga.
 * @return {Object} - return store
 */
function* rootSaga() {
  yield all([
    loginSaga(loginApi),
    logoutSaga(logoutApi),
    registerSaga(registerApi),
    createCarSaga(createCarApi),
    deleteCarSaga(deleteCarApi),
    editCarSaga(editCarsApi),
    getCarsSaga(getCarsApi),
    // TODO: connect saga files with api
  ]);
}

export default rootSaga;
