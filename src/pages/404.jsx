import React from "react";
import { Container, Typography } from '@material-ui/core';

// ------- Styles -------
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(20,0,6),
  },

}));
// ----- End Styles -----

function Error404() {
  const classes = useStyles();
  return (
  <div className={classes.root}>
    <Container maxWidth="sm">
      <Typography variant ='h2' align ="center" color="textPrimary"  gutterBottom>
        404 page not found
      </Typography>
    </Container>
  </div>
  );
}


export default Error404;