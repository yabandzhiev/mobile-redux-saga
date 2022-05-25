import { Button } from "@mui/material";
import { useAuthActionsDispatch } from "../../../common/hooks/useActions";

import "./LogoutButton.scss";

const LogoutButton = () => {
  const { logoutUser } = useAuthActionsDispatch();

  const onLogoutClick = () => {
    logoutUser();
  };

  return (
    <Button className="logoutButton" onClick={onLogoutClick}>
      Logout
    </Button>
  );
};

export default LogoutButton;
