import { LOGIN_SUCCESS, LOGIN_ERROR } from "../components/Auth/Login/types";
import { LOGOUT_SUCCESS } from "../components/Auth/Logout/types";

export const initialState = {
  loginError: "",
  currentUser: false,
  isLoggedIn: false,
  userId: null,
  accessToken: null,
  firstName: "",
  lastName: "",
};

export const userSessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginError: "",
        currentUser: action.payload.username,
        isLoggedIn: true,
        userId: action.payload.userId,
        accessToken: action.payload.accessToken,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload,
        currentUser: false,
        isLoggedIn: false,
        userId: null,
        accessToken: null,
        firstName: "",
        lastName: "",
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        ...initialState,
      };

    default:
      return state;
  }
};
