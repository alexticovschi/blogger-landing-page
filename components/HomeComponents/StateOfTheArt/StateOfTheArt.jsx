import React from "react";
import Image from "next/image";
import useStyles from "./stateOfTheArtStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const StateOfTheArt = () => {
  const classes = useStyles();

  return (
    <section className={classes.stateOfTheArt}>
      <Grid container className={classes.stateOfTheArtContainer}>
        <Grid
          item
          xs={12}
          md={6}
          align="center"
          className={classes.stateOfTheArtImgContainer}
        >
          <picture>
            <Image
              className={classes.stateOfTheArtImg}
              src="/images/illustration-phones.svg"
              alt="Illustration Phones"
              width={552}
              height={579}
            />
          </picture>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className={classes.stateOfTheArtTextContainer}
        >
          <div className={classes.stateOfTheArtText}>
            <Typography
              variant="h4"
              component="h4"
              className={classes.stateOfTheArtTitle}
              gutterBottom
            >
              State of the Art Infrastructure
            </Typography>
            <Typography
              variant="subtitle1"
              className={classes.stateOfTheArtSubtitle}
            >
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </section>
  );
};

export default StateOfTheArt;
