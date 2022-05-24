import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField, Grid, Typography } from "@mui/material";
import { useDispatch } from "react-redux";

import { registerUser } from "./actions";

const initialFormFields = {
  username: "",
  password: "",
  firstName: "",
  lastName: "",
};

const Register = () => {
  //store the values in state
  const [formFields, setFormFields] = useState(initialFormFields);

  const { username, password, firstName, lastName } = formFields;

  const dispatch = useDispatch();

  const isTextLengthInBoundary = (field) => field.length < 3 || field.length > 30;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  //handle submit logic
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(registerUser(username, password));
  };
  return (
    <>
      <Grid item className="title">
        <Typography variant="h5">Register</Typography>
      </Grid>

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
                autoFocus
                fullWidth
                value={firstName}
                onChange={handleChange}
                error={isTextLengthInBoundary(firstName)}
                helperText={
                  firstName.length < 3
                    ? "Name must be 3 letters or more!"
                    : " " && firstName.length > 30
                    ? "Name must be below 30 letters"
                    : ""
                }
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
                error={isTextLengthInBoundary(lastName)}
                //errorMessage
                helperText={
                  lastName.length < 3
                    ? "Last name must be 3 letters or more!"
                    : " " && lastName.length > 30
                    ? "Last name must be below 30 letters"
                    : ""
                }
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
                error={isTextLengthInBoundary(username)}
                helperText={
                  username.length < 3
                    ? "Username must be 3 letters or more!"
                    : " " && username.length > 30
                    ? "Username must be below 30 letters"
                    : ""
                }
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
                error={isTextLengthInBoundary(password)}
                helperText={
                  password.length < 3
                    ? "Password must be 3 letters or more!"
                    : " " && password.length > 30
                    ? "Password must be below 30 letters"
                    : ""
                }
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
        <span>Copyright © Mobile {new Date().getFullYear()}</span>
      </Grid>
    </>
  );
};

export default Register;
