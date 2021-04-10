import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  footer: {
    background: "hsl(240, 10%, 16%)",
    borderTopRightRadius: "80px",
  },
  footerContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    padding: "110px 0",
    width: "1250px",
    maxWidth: "90vw",
    margin: "0 auto",

    "@media (max-width: 767px)": {
      gridTemplateColumns: "1fr",
      justifyItems: "center",
      padding: "70px 0",
    },
  },
  footerLogo: {
    display: "flex",
    alignSelf: "center",
    paddingBottom: "20px",
    marginTop: "-10px",
  },
  footerList: {
    listStyleType: "none",
    paddingLeft: "10px",

    "@media (max-width: 767px)": {
      textAlign: "center",
    },

    "& li": {
      marginBottom: "16px",
    },

    "& li a": {
      color: "hsl(240, 2%, 79%)",
      fontFamily: ["Ubuntu", "sans-serif"],

      "&:hover": {
        cursor: "pointer",
        textDecoration: "underline",
      },
    },
  },
  footerTitle: {
    margin: 0,
    marginBottom: "30px",
    fontSize: 18,
    color: "#fff",
    fontFamily: ["Ubuntu", "sans-serif"],
    fontWeight: "600",
  },
}));

export default useStyles;
