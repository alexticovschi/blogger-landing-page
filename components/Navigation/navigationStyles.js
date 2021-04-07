import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  logoContainer: {
    "@media (max-width: 1005px)": {
      display: "flex",
      justifyContent: " space-between",
      alignItems: "center",
    },
  },
  logoMobile: {
    display: "none",

    "@media (max-width: 1005px)": {
      display: "block",
    },
  },

  menuContainer: {
    top: "0",
    position: "absolute",
    padding: "60px 0",

    width: "1200px",
    maxWidth: "90vw",
  },
  menuItems: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  logo: {
    paddingRight: "60px",
    marginLeft: "-60px",

    "@media (max-width: 1005px)": {
      display: "none",
    },
  },
  navMenu: {
    marginLeft: "60px",

    "& ul": {
      listStyle: "none",
      margin: "0",
      padding: "0",
      display: "flex",
      flexWrap: "wrap",
    },

    "& ul li:hover > ul": {
      display: "block",
    },

    "& ul li > a": {
      fontFamily: ["Ubuntu", "sans-serif"],
      textDecoration: "none",
      color: "rgba(255, 255, 255, 0.90)",
    },

    "& ul ul": {
      display: "none",
      background: "#fff",
      padding: "20px 30px 20px 15px",
      borderRadius: "5px",
      position: "absolute",

      "& li": {
        width: "100px",
        padding: "10px 20px",
      },
    },

    "& ul ul a": {
      color: "#000",
      fontFamily: ["Ubuntu", "sans-serif"],
      display: "block",
      width: "100%",

      "&:hover": {
        fontWeight: "600",
      },
    },
  },
  menuList: {
    "& > a": {
      display: "block",
      marginRight: "38px",
      padding: "15px 0 15px 0",

      "&:hover": {
        textDecoration: "underline",
        color: "#fff",

        "& img": {
          backgroundImage: `url(images/icon-arrow-light.svg)`,
          transform: "rotate(180deg)",
          transition: "linear .2s",
        },
      },

      "& img": {
        marginLeft: "8px",
      },
    },

    "@media (max-width: 1005px)": {
      display: "none",
    },
  },
  loginAndSignup: {
    marginLeft: "160px",

    "& a": {
      fontFamily: ["Ubuntu", "sans-serif"],
      fontWeight: "500",
      fontSize: 16,
      display: "inline-block",
      textDecoration: "none",
      padding: "12px 32px",
      borderRadius: "25px",
    },

    "@media (max-width: 1005px)": {
      display: "none",
    },
  },

  login: {
    color: "rgba(255, 255, 255, 0.85)",
    textAlign: "center",

    "&:hover": {
      backgroundColor: "#fff",
      color: "hsl(356, 100%, 66%)",
      transition: "linear .2s",
    },
  },

  signup: {
    color: "hsl(356, 100%, 62%)",
    backgroundColor: "#fff",
    fontFamily: "Overpass",

    "&:hover": {
      backgroundColor: "hsl(355, 100%, 74%)",
      color: "#fff",
      transition: "linear .2s",
    },
  },

  hamburgerMenuButton: {
    display: "none",

    "@media (max-width: 1005px)": {
      display: "block",
      cursor: "pointer",
    },
  },
}));

export default useStyles;
