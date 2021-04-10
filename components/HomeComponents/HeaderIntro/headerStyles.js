import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  headerIntro: {
    position: "relative",
    zIndex: "10",
  },
  introText: {
    marginTop: "4rem",
    marginBottom: "2.8rem",
  },
  introBtnLeft: {
    fontFamily: "Overpass",
    fontSize: 16,
    fontWeight: "600",
    textTransform: "none",
    padding: "0.6rem 1.5rem",
    borderRadius: "25px",
    color: "hsl(353, 100%, 62%)",
    backgroundColor: "#fff !important",
    zIndex: "10 !important",

    "&:hover": {
      backgroundColor: "hsl(355, 100%, 74%) !important",
      color: "#fff !important",
      boxShadow: "none",
    },
  },
  introBtnRight: {
    fontFamily: "Overpass",
    fontSize: 16,
    fontWeight: "600",
    textTransform: "none",
    padding: "0.6rem 1.5rem",
    borderRadius: "25px",
    color: "#fff",
    border: "1px solid#fff !important",

    "&:hover": {
      backgroundColor: "#fff",
      color: "hsl(355, 100%, 74%)",
      boxShadow: "none",
    },
  },
  intro: {
    fontWeight: "600",
    marginBottom: "20px",

    "@media (max-width: 768px)": {
      padding: "0 0px",
      fontSize: 38,
    },
  },
  subtitle: {
    "@media (max-width: 768px)": {
      padding: "0 38px",
      fontSize: 18,
    },
  },
  heading: {
    color: "hsl(208, 49%, 24%)",
  },
}));

export default useStyles;
