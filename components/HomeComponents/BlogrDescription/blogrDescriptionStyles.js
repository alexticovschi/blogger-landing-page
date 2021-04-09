import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  blogrDescription: {
    padding: "110px 0",
    width: "1250px",
    maxWidth: "90vw",
    margin: "0 auto",
  },
  blogrDescriptionContainer: {
    display: "flex",
    justifyContent: "flex-end",
    position: "relative",
    textAlign: "left",
  },
  titles: {
    marginBottom: "20px",
    fontFamily: "Overpass",
    fontWeight: "600",
    color: "hsl(208, 49%, 24%)",
  },
  blogrDescriptionText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: "53%",
    height: "696px",
    color: "hsl(207, 13%, 34%)",
  },
  blogrDescriptionImgContainer: {
    position: "absolute",
    right: "53%",
    width: "925px",
  },
  subtitle1: {
    marginBottom: "62px",
  },
}));

export default useStyles;
