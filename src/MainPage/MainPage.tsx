import React from "react";
import bg from "./bg.jpg";
import { makeStyles, Typography, Grid, Button } from "@material-ui/core";
import { ParallaxBanner } from "react-scroll-parallax";

const useMainPageStyles = makeStyles(theme => ({
  jumbo: {
    background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bg})`,
    height: "800px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: theme.spacing(5),
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 95%)"
  },
  jumboButtons: {
    marginTop: "300px"
  }
}));

export const MainPage = () => {
  const classes = useMainPageStyles();

  return (
    <ParallaxBanner
      className={classes.jumbo}
      layers={[
        {
          image: `url(${bg})`,
          amount: 0.1,
          children: <></>
        }
      ]}
    >
      <Grid container>
        <Grid item xs={4}>
          <Typography variant="h3">Team Orion</Typography>
          <Typography variant="h6">Robotics team dedicated to </Typography>
        </Grid>
        <Grid item className={classes.jumboButtons}>
          <Button variant="contained">View Last Year's Code</Button>
        </Grid>
      </Grid>
    </ParallaxBanner>
  );
};
