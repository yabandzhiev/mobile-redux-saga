import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();
  const handleLoginPage = () => {
    navigate("/login");
  };
  return <Button onClick={handleLoginPage}>LOGIN</Button>;
};

export default LoginButton;
