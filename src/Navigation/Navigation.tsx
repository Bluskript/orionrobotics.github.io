import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Tooltip,
  Typography,
  makeStyles
} from "@material-ui/core";
import { Code } from "@material-ui/icons";

const useNavStyles = makeStyles({
  spacer: {
    flexGrow: 1
  }
});

export const Navigation = () => {
  const classes = useNavStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Team Orion</Typography>
        <div className={classes.spacer} />
        <Tooltip title="View Github">
          <IconButton
            target="_blank"
            href="https://github.com/Bluskript/teamorion"
          >
            <Code />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};
