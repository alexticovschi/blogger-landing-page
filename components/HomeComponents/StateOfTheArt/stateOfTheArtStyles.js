import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  stateOfTheArt: {
    background: `url(/images/bg-pattern-circles.svg), linear-gradient(90deg, hsl(237, 17%, 21%), hsl(237, 23%, 32%))`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 85%",
    borderRadius: "0 80px 0 80px",
  },

  stateOfTheArtContainer: {
    display: "flex",
    width: "1250px",
    maxWidth: "90vw",
    margin: "0 auto",
  },
  stateOfTheArtImgContainer: {
    margin: "-70px 0 -110px -40px",

    "@media (max-width: 980px)": {
      margin: "-170px 0 0 0",
    },
  },
  stateOfTheArtImg: {
    "@media (max-width: 980px)": {
      margin: "-270px 0 -110px -40px",
      width: "100%",
    },
  },
  stateOfTheArtTextContainer: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
  },
  stateOfTheArtTitle: {
    marginBottom: "20px",
  },
  stateOfTheArtText: {
    fontFamily: "Overpass",
    fontWeight: "600",
    color: "#ffffff",

    "@media (max-width: 780px)": {
      textAlign: "center",
      padding: "10px 0 80px 0",
    },
  },
  stateOfTheArtSubtitle: {
    color: "hsl(240, 2%, 79%)",
  },
}));

export default useStyles;
