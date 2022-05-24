import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { logoutUser } from "./actions";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const onLogoutClick = () => {
    dispatch(logoutUser());
  };

  return <Button onClick={onLogoutClick}>Logout</Button>;
};

export default LogoutButton;
