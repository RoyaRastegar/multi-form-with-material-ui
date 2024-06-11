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

type FormPersonalDetailProps = {
  values: User;
  nextStep: () => void;
  pervStep: () => void;
  handelinput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const theme = responsiveFontSizes(createTheme());

export const FormPersonalDetail: React.FC<FormPersonalDetailProps> = ({
  values,
  pervStep,
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
  const back = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    pervStep();
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar
            title=" Form User Personal Detail"
            position="static"
            color="primary"
          >
            {appBarLabel("Form User Detail")}
          </AppBar>
          <br />
          <TextField
            label="country"
            name="country"
            variant="standard"
            size="small"
            defaultValue={values.country}
            onChange={handelinput}
          />
          <br />
          <TextField
            name="phone"
            label="phone"
            variant="standard"
            size="small"
            defaultValue={values.phone}
            onChange={handelinput}
          />
          <br />
          <Button
            variant="contained"
            onClick={(e) => next(e)}
            style={{ marginTop: "30px", marginRight: "10px" }}
          >
            Continue
          </Button>
          <Button
            variant="outlined"
            onClick={(e) => back(e)}
            style={{ marginTop: "30px" }}
          >
            back
          </Button>
        </React.Fragment>
      </ThemeProvider>
    </div>
  );
};
