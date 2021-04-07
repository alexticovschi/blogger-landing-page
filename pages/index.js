import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../src/theme";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Navigation from "../components/Navigation/Navigation";
import DesignedForTheFuture from "../components/HomeComponents/DesignedForTheFuture/DesignedForTheFuture";
import StateOfTheArt from "../components/HomeComponents/StateOfTheArt/StateOfTheArt";

import useStyles from "../src/homeStyles";

export default function Home() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Blogr | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={classes.bgIntro}>
        <Navigation />
        <div className="intro">
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
      </header>
      <main>
        <DesignedForTheFuture />
        <StateOfTheArt />
      </main>
    </ThemeProvider>
  );
}
