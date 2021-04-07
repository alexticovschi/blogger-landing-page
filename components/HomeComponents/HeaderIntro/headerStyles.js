import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
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
