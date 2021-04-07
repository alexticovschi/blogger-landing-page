import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  bgIntro: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "38rem",
    backgroundImage: `url(../images/bg-pattern-intro.svg), linear-gradient(90deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%))`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "25%",
    borderBottomLeftRadius: "80px",
    color: "#fff",
  },
}));

export default useStyles;
