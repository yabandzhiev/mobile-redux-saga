import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import createReducer from "./reducers/rootReducer.js";
import logger from "redux-logger";
import rootSaga from "./sagas/rootSaga";
// Redux persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["redirect", "getCars"],
};

const persistedReducer = persistReducer(persistConfig, createReducer());

const sagaMiddleware = createSagaMiddleware();
const middlewares = [logger, sagaMiddleware];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
