import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

//check if there is logged in user in state and redirect accordingly
const AuthRouteGuard = () => {
  const { currentUser } = useSelector((state) => state.userSession);
  if (currentUser) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

export default AuthRouteGuard;
