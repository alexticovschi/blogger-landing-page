import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "hsl(356, 100%, 66%)",
    },
    secondary: {
      main: "#19857b",
    },
    typography: {
      fontFamily: ["Overpass", "Ubuntu"],
      fontWeightLight: 300,
      fontWeightBold: 600,
    },
    background: {
      default: "#fff",
    },
  },
});

export default theme;
