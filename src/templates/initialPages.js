import React from "react";
import { makeStyles, Grid} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  contentItem: {
    backgroundImage: "url(/signin-desktop.jpg)",
    backgroundSize: "cover",
    display: "none",
    overflow: "hidden",
    overflowY: "scroll",
    height: "100vh",
    width: "100%",
    [theme.breakpoints.up('lg')]: {
      display: "block",
    }
  }
}));

const InitialPage = ({ component: Component, ...props }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item lg={6} className={classes.contentItem}>
      </Grid>
      <Grid item xs={12 }lg={6}>
        <Component {...props} />
      </Grid>
    </Grid>
  );
};

export default InitialPage;
