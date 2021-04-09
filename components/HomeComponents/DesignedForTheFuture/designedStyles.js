import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  designedForTheFuture: {
    padding: "150px 0",
    overflow: "hidden",

    "@media (max-width: 980px)": {
      padding: "100px 0",
    },
  },
  designedContainer: {
    display: "flex",
    justifyContent: "flex-start",
    position: "relative",
    textAlign: "left",

    "@media (max-width: 965px)": {
      width: "90vw",
      margin: "0 auto",
    },

    "@media (max-width: 966px)": {
      display: "grid",
      gridTemplateRows: "1fr  max-content",
    },

    "@media (min-width: 1366px)": {
      width: "1250px",
      margin: "0 auto",
    },
  },
  designedTitle: {
    marginBottom: "-110px",
    textAlign: "center",
    fontFamily: "Overpass",
    fontWeight: "600",
    color: "hsl(208, 49%, 24%)",

    "@media (max-width: 980px)": {
      marginBottom: "60px",
    },
    "@media (max-width: 767px) ": {
      fontSize: 30,
      padding: "0 20px",
      marginBottom: "40px",
    },
  },
  titles: {
    marginBottom: "20px",
    fontFamily: "Overpass",
    fontWeight: "600",
    color: "hsl(208, 49%, 24%)",

    "@media (max-width: 980px)": {
      textAlign: "center",
    },

    "@media (max-width: 768px) ": {
      fontSize: 30,
      padding: "0 20px",
    },
  },
  designedText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",

    marginRight: "53%",
    paddingTop: "40px",
    height: "780px",
    color: "hsl(207, 13%, 34%)",

    "@media (max-width: 1320px) ": {
      marginLeft: "5vw",
    },

    "@media (max-width: 980px)": {
      margin: 0,
      height: "auto",
      textAlign: "center",
    },
  },
  designedImgContainer: {
    position: "absolute",
    left: "53%",
    width: "925px",

    "@media (max-width: 980px)": {
      position: "relative",
      width: "auto",
      height: "100%",
      left: 0,
    },
  },
  subtitle1: {
    marginBottom: "62px",
  },
}));

export default useStyles;
