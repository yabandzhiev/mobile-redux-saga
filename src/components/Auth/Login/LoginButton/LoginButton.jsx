import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./LoginButton.scss";

const LoginButton = () => {
  const navigate = useNavigate();
  const handleLoginPage = () => {
    navigate("/login");
  };
  return (
    <Button className="loginButton" onClick={handleLoginPage}>
      LOGIN
    </Button>
  );
};

export default LoginButton;
