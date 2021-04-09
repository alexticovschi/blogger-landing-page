import React from "react";
import Image from "next/image";
import useMediaQuery from "../../useMediaQuery";
import useStyles from "./designedStyles";
import Typography from "@material-ui/core/Typography";

const DesignedForTheFuture = () => {
  const classes = useStyles();
  const isBreakpoint = useMediaQuery(768);

  return (
    <section className={classes.designedForTheFuture}>
      <Typography
        variant="h4"
        component="h4"
        align="center"
        className={classes.designedTitle}
        gutterBottom
      >
        Designed for the future
      </Typography>

      <div className={classes.designedContainer}>
        <div className={classes.designedImgContainer}>
          {isBreakpoint ? (
            <Image
              className={classes.designedImg}
              src="/images/illustration-editor-mobile.svg"
              alt="background circles"
              width={1200}
              height={900}
            />
          ) : (
            <Image
              className={classes.designedImg}
              src="/images/illustration-editor-desktop.svg"
              alt="background circles"
              width={1200}
              height={1100}
            />
          )}
        </div>
        <div className={classes.designedText}>
          <Typography
            variant="h5"
            component="h4"
            align="left"
            className={classes.titles}
            gutterBottom
          >
            Introducing an extensible editor
          </Typography>
          <Typography
            variant="subtitle1"
            className={classes.subtitle1}
            gutterBottom
          >
            Blogr features an exceedingly intuitive interface which lets you
            focus on one thing: creating content. The editor supports management
            of multiple blogs and allows easy manipulation of embeds such as
            images, videos, and Markdown. Extensibility with plugins and themes
            provide easy ways to add functionality or change the looks of a
            blog.
          </Typography>

          <Typography
            variant="h5"
            component="h4"
            className={classes.titles}
            gutterBottom
          >
            Robust content management
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle2}>
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format, or flow. With this functionality,
            you’re in full control.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default DesignedForTheFuture;
