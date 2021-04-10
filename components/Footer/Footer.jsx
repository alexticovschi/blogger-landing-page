import React from "react";
import useStyles from "./footerStyles";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.footerContainer}>
        <ul className={classes.footerList}>
          <li className={classes.footerLogo}>
            <Link href="#">
              <Image
                src="/images/logo.svg"
                width="101"
                height="40"
                alt="logo"
                className={classes.footerLogo}
              />
            </Link>
          </li>
        </ul>
        <ul className={classes.footerList}>
          <h6 className={classes.footerTitle}>Product</h6>
          <li>
            <Link href="#">Overview</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Marketplace</Link>
          </li>

          <li>
            <Link href="#">Features</Link>
          </li>

          <li>
            <Link href="#">Integrations</Link>
          </li>
        </ul>
        <ul className={classes.footerList}>
          <h6 className={classes.footerTitle}>Company</h6>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Team</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">Careers</Link>
          </li>
        </ul>
        <ul className={classes.footerList}>
          <h6 className={classes.footerTitle}>Connect</h6>
          <li>
            <Link href="#">Contact</Link>
          </li>
          <li>
            <Link href="#">Newsletter</Link>
          </li>
          <li>
            <Link href="#">LinkedIn</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
