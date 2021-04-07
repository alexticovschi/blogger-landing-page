import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  designedForTheFuture: {
    padding: "150px 0",
  },
  designedContainer: {
    display: "flex",
    justifyContent: "flex-end",
    position: "relative",
    textAlign: "left",
  },
  designedTitle: {
    marginBottom: "-110px",
    textAlign: "center",
    fontFamily: "Overpass",
    fontWeight: "600",
    color: "hsl(208, 49%, 24%)",
  },
  titles: {
    marginBottom: "20px",
    fontFamily: "Overpass",
    fontWeight: "600",
    color: "hsl(208, 49%, 24%)",
  },
  designedText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginRight: "53%",
    paddingTop: "40px",
    height: "780px",
  },
  designedImgContainer: {
    position: "absolute",
    left: "53%",
    width: "925px",
  },
  subtitle1: {
    marginBottom: "62px",
  },
}));

export default useStyles;
