import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../src/theme";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import HeaderIntro from "../components/HomeComponents/HeaderIntro/HeaderIntro";
import DesignedForTheFuture from "../components/HomeComponents/DesignedForTheFuture/DesignedForTheFuture";
import StateOfTheArt from "../components/HomeComponents/StateOfTheArt/StateOfTheArt";
import BlogrDescription from "../components/HomeComponents/BlogrDescription/BlogrDescription";

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
        <HeaderIntro />
      </header>
      <main>
        <DesignedForTheFuture />
        <StateOfTheArt />
        <BlogrDescription />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
