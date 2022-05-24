import { Button } from "@mui/material";
import { useAuthActionsDispatch } from "../../../common/hooks/useActions";

const LogoutButton = () => {
  const { logoutUser } = useAuthActionsDispatch();

  const onLogoutClick = () => {
    logoutUser();
  };

  return <Button onClick={onLogoutClick}>Logout</Button>;
};

export default LogoutButton;
