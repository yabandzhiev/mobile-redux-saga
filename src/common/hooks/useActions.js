import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import { loginUser } from "../../components/Auth/Login/actions";
import { logoutUser } from "../../components/Auth/Logout/actions";
import { registerUser } from "../../components/Auth/Register/actions";
import * as crudActions from "../../components/Catalog/actions";
import * as errorActions from "../../components/ErrorPopup/actions";

export const useCrudActionsDispatch = () => {
  const dispatch = useDispatch();
  return bindActionCreators(crudActions, dispatch);
};

export const useAuthActionsDispatch = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ loginUser, registerUser, logoutUser }, dispatch);
};

export const useErrorActionsDispatch = () => {
  const dispatch = useDispatch();
  return bindActionCreators(errorActions, dispatch);
};
