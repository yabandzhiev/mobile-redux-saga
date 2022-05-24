import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Grid, Typography } from "@mui/material";

import { useAuthActionsDispatch } from "../../../common/hooks/useActions";
import { useSelector } from "react-redux";
import ErrorPopup from "../../ErrorPopup/ErrorPopup";

const initialFormFields = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
};

const Register = () => {
  const { registerUser } = useAuthActionsDispatch();
  //store the values in state
  const [formFields, setFormFields] = useState(initialFormFields);

  //get the values
  const { username, password, firstName, lastName } = formFields;

  //form input error state
  const [errorText, setErrorText] = useState(initialFormFields);

  //get error from state
  const { error, open } = useSelector((state) => state.getErrorPopup);

  //validate every input length
  const checkInputLength = (e, name) => {
    if (e.target.value.length < 3 || e.target.value.length > 15) {
      setErrorText({ ...errorText, [name]: `${name} must be between 3 and 15 letters` });
    } else {
      setErrorText({ ...errorText, [name]: null });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    checkInputLength(e, name);

    setFormFields({ ...formFields, [name]: value });
  };

  //handle submit logic
  const handleSubmit = (e) => {
    e.preventDefault();

    //check if there are errors in the errorText state
    const isFormValid = Object.values(errorText).every((val) => {
      if (val !== null) {
        return false;
      }
      return true;
    });

    if (!isFormValid) {
      return;
    }

    registerUser(username, password, firstName, lastName);
  };
  return (
    <>
      <Grid item className="title">
        <Typography variant="h5">Register</Typography>
      </Grid>

      {error ? <ErrorPopup error={error} open={open} /> : ""}

      <Grid item>
        <form onSubmit={handleSubmit}>
          <Grid container columnSpacing={2} className="name-input-fields">
            <Grid item>
              <TextField
                type="text"
                label="First name"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                autoFocus
                value={firstName}
                onChange={handleChange}
                error={errorText.firstName}
                helperText={errorText.firstName}
              />
            </Grid>
            <Grid item>
              <TextField
                type="text"
                label="Last Name"
                name="lastName"
                variant="outlined"
                required
                autoFocus
                fullWidth
                value={lastName}
                onChange={handleChange}
                error={errorText.lastName}
                helperText={errorText.lastName}
              />
            </Grid>
          </Grid>

          <br />
          <Grid container direction="column" spacing={2} className="input-fields">
            <Grid item>
              <TextField
                type="text"
                label="Username"
                name="username"
                variant="outlined"
                required
                fullWidth
                autoFocus
                value={username}
                onChange={handleChange}
                error={errorText.username}
                helperText={errorText.username}
              />
            </Grid>
            <Grid item>
              <TextField
                type="password"
                label="Password"
                name="password"
                variant="outlined"
                required
                fullWidth
                value={password}
                onChange={handleChange}
                error={errorText.password}
                helperText={errorText.password}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" type="submit" className="button-block">
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>

      <Grid item className="links">
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </Grid>

      <Grid item className="logo">
        <span>Copyright © Mobile{new Date().getFullYear()}</span>
      </Grid>
    </>
  );
};

export default Register;
