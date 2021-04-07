import React from "react";
import useStyles from "./headerStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const HeaderIntro = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.introText}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          className={classes.intro}
          gutterBottom
        >
          A modern publishing platform
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          className={classes.subtitle}
          gutterBottom
        >
          Grow your audience and build your online brand
        </Typography>
      </div>
      <div>
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button className={classes.introBtnLeft} container="contained">
              Start for Free
            </Button>
          </Grid>
          <Grid item>
            <Button className={classes.introBtnRight}>Learn More</Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default HeaderIntro;
