import React from "react";
import useStyles from "./headerStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";

const HeaderIntro = () => {
  const classes = useStyles();

  return (
    <div className={classes.headerIntro}>
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
      <Grid container spacing={2} justify="center">
        <Grid item>
          <Link href="#">
            <a className={classes.introBtnLeft} container="contained">
              Start for Free
            </a>
          </Link>
        </Grid>
        <Grid item>
          <Link href="#">
            <a className={classes.introBtnRight}>Learn More</a>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeaderIntro;
