import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  stateOfTheArt: {
    background: `url(/images/bg-pattern-circles.svg), linear-gradient(90deg, hsl(237, 17%, 21%), hsl(237, 23%, 32%))`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0 85%",
    borderRadius: "0 80px 0 80px",

    "@media (max-device-width: 768px) and (orientation: portrait)": {
      marginTop: "140px",
    },
  },

  stateOfTheArtContainer: {
    display: "flex",
    width: "1250px",
    maxWidth: "90vw",
    margin: "0 auto",
  },
  stateOfTheArtImgContainer: {
    margin: "-70px 0 -110px -70px",

    "@media (max-width: 980px)": {
      margin: "-170px 0 0 0",
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
    paddingLeft: "40px",
    paddingLeft: "110px",

    "@media (max-width:768px)": {
      textAlign: "center",
      padding: "10px 30px 100px 30px",
    },
  },
  stateOfTheArtSubtitle: {
    color: "hsl(240, 2%, 79%)",
  },
}));

export default useStyles;
