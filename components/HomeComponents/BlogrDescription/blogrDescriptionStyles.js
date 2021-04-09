import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  blogrDescription: {
    padding: "110px 0",
    width: "1250px",
    maxWidth: "90vw",
    margin: "0 auto",

    "@media (max-width: 768px)": {
      padding: "65px 0",
    },
  },
  blogrDescriptionContainer: {
    display: "flex",
    justifyContent: "flex-end",
    position: "relative",
    textAlign: "left",

    "@media (max-width: 966px)": {
      display: "grid",
      gridTemplateRows: "1fr  max-content",
    },
  },
  titles: {
    marginBottom: "20px",
    fontFamily: "Overpass",
    fontWeight: "600",
    color: "hsl(208, 49%, 24%)",

    "@media (max-width: 768px)": {
      textAlign: "center",
    },
  },
  blogrDescriptionText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "53%",
    height: "696px",
    color: "hsl(207, 13%, 34%)",

    "@media (max-width: 980px)": {
      position: "relative",
      width: "100%",
      margin: 0,
      height: "auto",
      padding: "40px 0 30px 0",
    },

    "@media (max-width: 768px)": {
      textAlign: "center",
    },
  },
  blogrDescriptionImgContainer: {
    position: "absolute",
    right: "53%",
    width: "925px",

    "@media (max-width: 980px)": {
      position: "relative",
      width: "100%",
      right: 0,
    },
  },
  subtitle1: {
    marginBottom: "62px",
  },
}));

export default useStyles;
