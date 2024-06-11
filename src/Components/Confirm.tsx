import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { User } from "./FormUser";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import AppBar from "@mui/material/AppBar";
import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import Button from "@mui/material/Button";

type ConfirmProps = {
  values: User;
  nextStep: () => void;
  pervStep: () => void;
};
const theme = responsiveFontSizes(createTheme());

export const Confirm: React.FC<ConfirmProps> = ({
  values: { firstname, lastname, email, country, phone },
  pervStep,
  nextStep,
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
          <AppBar title="Confirm User Data" position="static" color="primary">
            {appBarLabel("Form User Detail")}
          </AppBar>
          <br />
          <List>
            <ListItemText primary="First Name" secondary={firstname} />
            <ListItemText primary="Last Name" secondary={lastname} />
            <ListItemText primary="Email" secondary={email} />
            <ListItemText primary="Country" secondary={country} />
            <ListItemText primary="phone" secondary={phone} />
          </List>
          <br />
          <Button
            variant="contained"
            onClick={(e) => next(e)}
            style={{ marginTop: "30px", marginRight: "10px" }}
          >
            Continue & Confirm
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
