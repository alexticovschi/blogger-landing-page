import React from "react";
import useStyles from "./navigationStyles";
import Grid from "@material-ui/core/Grid";
import Link from "next/link";
import { useState, useEffect } from "react";
import useMediaQuery from "../useMediaQuery";

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);
  const classes = useStyles();
  const isBreakpoint = useMediaQuery(1012);

  useEffect(() => {
    setOpen(false);
  }, [isBreakpoint]);

  const handleToggle = () => setOpen(!isOpen);

  return (
    <div className={classes.menuContainer}>
      <div className={classes.logoContainer}>
        <Link href="#">
          <img
            src="images/logo.svg"
            alt="logo"
            className={classes.logoMobile}
          />
        </Link>
        <div onClick={handleToggle} className={classes.hamburgerMenuButton}>
          {isOpen ? (
            <img src="images/icon-close.svg" alt="" />
          ) : (
            <img src="images/icon-hamburger.svg" alt="" />
          )}
        </div>
      </div>

      <div className={isOpen ? classes.menuItemsShow : classes.menuItems}>
        <nav className={classes.navMenu}>
          <ul className={classes.ulOuter}>
            <li className={classes.logo}>
              <Link href="#">
                <img src="images/logo.svg" alt="logo" />
              </Link>
            </li>
            <li className={classes.menuList}>
              <Link href="#">
                <a>
                  Product
                  <picture>
                    <source
                      srcSet="images/icon-arrow-dark.svg"
                      media="(max-width: 1000px)"
                    />
                    <source srcSet="images/icon-arrow-light.svg" />
                    <img
                      src="images/icon-arrow-light.svg"
                      alt="Illustration Laptop Default"
                    />
                  </picture>
                </a>
              </Link>
              <ul className={classes.ulInner}>
                <li>
                  <Link href="#">
                    <a>Overview</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Pricing</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Marketplace</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Features</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Integrations</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className={classes.menuList}>
              <Link href="#">
                <a>
                  Company
                  <picture>
                    <source
                      srcSet="images/icon-arrow-dark.svg"
                      media="(max-width: 1000px)"
                    />
                    <source srcSet="images/icon-arrow-light.svg" />
                    <img
                      src="images/icon-arrow-light.svg"
                      alt="Illustration Laptop Default"
                    />
                  </picture>
                </a>
              </Link>
              <ul>
                <li>
                  <Link href="#">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Team</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Careers</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className={classes.menuList}>
              <Link href="#">
                <a>
                  Connect
                  <picture>
                    <source
                      srcSet="images/icon-arrow-dark.svg"
                      media="(max-width: 1000px)"
                    />
                    <source srcSet="images/icon-arrow-light.svg" />
                    <img
                      src="images/icon-arrow-light.svg"
                      alt="Illustration Laptop Default"
                    />
                  </picture>
                </a>
              </Link>
              <ul>
                <li>
                  <Link href="#">
                    <a>Contact</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>Newsletter</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>LinkedIn</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className={classes.loginAndSignup}>
          <Grid
            container
            justify="center"
            className={classes.loginAndSignupGridContainer}
          >
            <Grid item xs={12}>
              <Link href="#">
                <a className={classes.login}>Login</a>
              </Link>
            </Grid>
            <Grid item xs={12}>
              <Link href="#">
                <a className={classes.signup}>Sign Up</a>
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
