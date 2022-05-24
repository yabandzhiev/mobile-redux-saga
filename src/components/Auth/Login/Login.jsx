import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, TextField, Grid, Typography } from "@mui/material";

import ErrorPopup from "../../ErrorPopup/ErrorPopup";

import { useAuthActionsDispatch } from "../../../common/hooks/useActions";

const initialFormFields = {
  username: "",
  password: "",
};

const Login = () => {
  //login user dispatch
  const { loginUser } = useAuthActionsDispatch();

  //get error from state
  const { error, open } = useSelector((state) => state.getErrorPopup);

  //store the input values in state
  const [formFields, setFormFields] = useState(initialFormFields);

  const { username, password } = formFields;

  //handle the submit logic
  const handleSubmit = async (e) => {
    e.preventDefault();

    loginUser(username, password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <>
      <Grid item className="title">
        <Typography variant="h5">Sign in</Typography>
      </Grid>

      {error ? <ErrorPopup error={error} open={open} /> : ""}

      <Grid item>
        <form onSubmit={handleSubmit}>
          <Grid container direction="column" spacing={2} className="input-fields">
            <Grid item>
              <TextField
                type="text"
                label="Username"
                name="username"
                variant="outlined"
                onChange={handleChange}
                value={username}
                required
                fullWidth
                autoFocus
              />
            </Grid>
            <Grid item>
              <TextField
                type="password"
                label="Password"
                name="password"
                variant="outlined"
                onChange={handleChange}
                value={password}
                fullWidth
                required
              />
            </Grid>
            <Grid item>
              <Button variant="contained" type="submit" className="button-block">
                Sign In
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>

      <Grid item className="links">
        <Link to="/register">Dont have an account?</Link>
      </Grid>
      <Grid item className="links">
        <Link to="/">Continue to catalog</Link>
      </Grid>
      <Grid item className="logo">
        <img src="/carLogo.png" alt="logo" />
        <br />
        <span>Copyright © Mobile{new Date().getFullYear()}</span>
      </Grid>
    </>
  );
};
export default Login;
