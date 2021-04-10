import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  logoContainer: {
    "@media (max-width: 1000px)": {
      display: "flex",
      justifyContent: " space-between",
      alignItems: "center",
    },
  },
  logoMobile: {
    display: "none",

    "@media (max-width: 1000px)": {
      display: "block",
    },
  },

  menuContainer: {
    top: "0",
    position: "absolute",
    padding: "60px 0",

    width: "1200px",
    maxWidth: "90vw",

    "@media (max-width: 1000px)": {
      flexDirection: "column",
    },
  },
  menuItems: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",

    "@media (max-width: 1000px)": {
      display: "none",
    },
  },
  menuItemsShow: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    background: "#fff",
    boxShadow: "4px 25px 39px -3px rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    marginTop: "30px",
    paddingTop: "20px",
    paddingBottom: "30px",
    position: "relative",

    zIndex: "100",
  },
  logo: {
    paddingRight: "60px",
    marginLeft: "-60px",

    "@media (max-width: 1000px)": {
      display: "none",
    },
  },
  navMenu: {
    marginLeft: "60px",

    "@media (max-width: 1000px)": {
      margin: 0,
      paddingBottom: "25px",
      borderBottom: "1px solid hsl(240, 2%, 79%, 0.3)",
    },

    "& ul": {
      listStyle: "none",
      margin: "0",
      padding: "0",
      display: "flex",
      flexWrap: "wrap",

      "@media (max-width: 1000px)": {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
      },
    },

    "& ul li:hover > ul": {
      display: "block",

      "@media (max-width: 1000px)": {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      },
    },

    "& ul li:hover ul": {
      "@media (max-width: 1000px)": {
        display: "block",
      },
    },

    "& ul li > a": {
      fontFamily: ["Ubuntu", "sans-serif"],
      textDecoration: "none",
      color: "rgba(255, 255, 255, 0.90)",

      "@media (max-width: 1000px)": {
        margin: "0",
      },
    },

    "& ul ul": {
      display: "none",
      background: "#fff",
      padding: "20px 30px 20px 15px",
      borderRadius: "5px",
      position: "absolute",

      "@media (max-width: 1000px)": {
        position: "relative",
        backgroundColor: "hsl(240, 2%, 79%, 0.3)",
        margin: "0 25px",
      },

      "& li": {
        width: "100px",
        padding: "10px 20px",

        "@media (max-width: 1000px)": {
          margin: "0 auto",
        },
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

      "@media (max-width: 1000px)": {
        color: "hsl(237, 23%, 32%) !important",
      },
    },
  },
  menuList: {
    "@media (max-width: 1000px)": {
      textAlign: "center",
    },

    "& > a": {
      display: "block",
      marginRight: "38px",
      padding: "15px 0 15px 0",
      fontWeight: "600",

      "@media (max-width: 1000px)": {
        color: "hsl(237, 23%, 32%) !important",
      },

      "&:hover": {
        textDecoration: "underline",
        color: "#fff",

        "@media (max-width: 1000px)": {
          textDecoration: "none",
        },

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
  },
  loginAndSignup: {
    marginLeft: "auto",
    textAlign: "center",

    "@media (max-width: 1032px)": {
      marginLeft: "90px",
    },

    "@media (max-width: 1000px)": {
      marginLeft: "0",
    },

    "& a": {
      fontFamily: ["Ubuntu", "sans-serif"],
      fontWeight: "500",
      fontSize: 16,
      display: "inline-block",
      textDecoration: "none",
      padding: "12px 32px",
      borderRadius: "25px",
    },
  },
  loginAndSignupGridContainer: {
    listStyleType: "none",
    marginTop: "20px",

    "@media (min-width: 1000px)": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    },
  },

  login: {
    color: "rgba(255, 255, 255, 0.85)",
    textAlign: "center",
    fontWeight: "600 !important",

    "@media (max-width: 1000px)": {
      color: "hsl(237, 23%, 32%)",
      marginBottom: "10px",
    },

    "&:hover": {
      color: "#fff",
      transition: "linear .2s",
      textDecoration: "underline",

      "@media (max-width: 1000px)": {
        color: "hsl(237, 23%, 32%)",
        textDecoration: "none",
      },
    },
  },

  signup: {
    color: "hsl(356, 100%, 62%)",
    backgroundColor: "#fff",
    fontFamily: "Overpass",

    "@media (max-width: 1000px)": {
      background: "linear-gradient(90deg, #ff8f70, #ff3d54)",
      marginBottom: "10px",
      color: "#fff",
    },

    "&:hover": {
      backgroundColor: "hsl(355, 100%, 74%)",
      color: "#fff",
      transition: "linear .2s",
    },
  },

  hamburgerMenuButton: {
    display: "none",

    "@media (max-width: 1000px)": {
      display: "block",
      cursor: "pointer",
    },
  },
}));

export default useStyles;
