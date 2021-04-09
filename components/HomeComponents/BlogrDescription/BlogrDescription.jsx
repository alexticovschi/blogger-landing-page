import React from "react";
import Image from "next/image";
import useStyles from "./blogrDescriptionStyles";
import Typography from "@material-ui/core/Typography";

const BlogrDescription = () => {
  const classes = useStyles();

  return (
    <section className={classes.blogrDescription}>
      <div className={classes.blogrDescriptionContainer}>
        <picture className={classes.blogrDescriptionImgContainer}>
          <Image
            src="/images/illustration-laptop-desktop.svg"
            alt="background circles"
            width={1200}
            height={900}
          />
        </picture>
        <div className={classes.blogrDescriptionText}>
          <Typography
            variant="h5"
            component="h4"
            align="left"
            className={classes.titles}
            gutterBottom
          >
            Free, open, simple
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.subtitle1}
            gutterBottom
          >
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </Typography>

          <Typography
            variant="h5"
            component="h4"
            className={classes.titles}
            gutterBottom
          >
            Powerful tooling
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle2}>
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default BlogrDescription;
