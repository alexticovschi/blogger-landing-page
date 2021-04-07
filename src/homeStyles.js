import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  bgIntro: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "38rem",
    backgroundImage: `url(images/bg-pattern-intro.svg), linear-gradient(90deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%))`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "25%",
    borderBottomLeftRadius: "80px",
    color: "#fff",
  },
  introText: {
    marginTop: "4rem",
    marginBottom: "2.8rem",
  },
  introBtnLeft: {
    fontFamily: "Overpass",
    fontSize: 17,
    fontWeight: "600",
    textTransform: "none",
    padding: "10px 22px",
    borderRadius: "25px",
    color: "hsl(353, 100%, 62%)",
    backgroundColor: "#fff",

    "&:hover": {
      backgroundColor: "hsl(355, 100%, 74%)",
      color: "#fff",
      boxShadow: "none",
    },
  },
  introBtnRight: {
    fontFamily: "Overpass",
    fontSize: 17,
    fontWeight: "600",
    textTransform: "none",
    padding: "10px 22px",
    borderRadius: "25px",
    color: "#fff",
    border: "1px solid#fff",

    "&:hover": {
      backgroundColor: "#fff",
      color: "hsl(355, 100%, 74%)",
      boxShadow: "none",
    },
  },
  intro: {
    fontWeight: "300",
  },
  subtitle: {},
  heading: {
    color: "hsl(208, 49%, 24%)",
  },
}));

export default useStyles;
