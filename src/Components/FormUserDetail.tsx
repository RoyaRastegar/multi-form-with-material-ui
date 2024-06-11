import { User } from "./FormUser";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import AppBar from "@mui/material/AppBar";
import TextField from "@mui/material/TextField";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import Button from "@mui/material/Button";

type FormUserDetailProps = {
  values: User;
  nextStep: () => void;
  handelinput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const theme = responsiveFontSizes(createTheme());

export const FormUserDetail: React.FC<FormUserDetailProps> = ({
  values,
  nextStep,
  handelinput,
}) => {
  function appBarLabel(label: string) {
    return (
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        ></IconButton>
        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
          {label}
        </Typography>
      </Toolbar>
    );
  }
  const next = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <AppBar title="Form User Detail" position="static" color="primary">
          {appBarLabel("Form User Detail")}
        </AppBar>
        <br />
        <TextField
          label="firstname"
          name="firstname"
          variant="standard"
          size="small"
          defaultValue={values.firstname}
          onChange={handelinput}
        />
        <br />
        <TextField
          name="lastname"
          label="lastname"
          variant="standard"
          size="small"
          defaultValue={values.lastname}
          onChange={handelinput}
        />
        <br />
        <TextField
          label="Email"
          name="email"
          variant="standard"
          size="small"
          defaultValue={values.email}
          onChange={handelinput}
        />
        <br />
        <Button
          variant="contained"
          onClick={(e) => next(e)}
          style={{ marginTop: "30px" }}
        >
          Continue
        </Button>
      </React.Fragment>
    </ThemeProvider>
  );
};
