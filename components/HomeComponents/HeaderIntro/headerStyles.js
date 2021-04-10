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
  btnsGridContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "300px",
    margin: "0 auto",
  },
  introBtnLeft: {
    fontFamily: "Overpass",
    fontSize: 17,
    fontWeight: "600",
    textTransform: "none",
    padding: ".9rem 1.5rem",
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
    padding: ".9rem 1.5rem",
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
    marginBottom: "20px",

    "@media (max-width: 768px)": {
      padding: "0",
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
