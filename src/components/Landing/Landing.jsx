import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useContext } from "react";

import SipMoonImage from "../../assets/sipmoon.jpg";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";
import "./Landing.css";

import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { fetchBio } from "../../graphql/queries";
import SocialLinks from "../SocialLinks";

function Landing() {
  const [positionSequence, setPositionSequence] = useState([]);
  const { theme, drawerOpen } = useContext(ThemeContext);
  const { data } = useQuery(fetchBio);
  const { bio } = data || {};

  const useStyles = makeStyles((t) => ({
    resumeBtn: {
      color: theme.primary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      fontSize: "1rem",
      fontWeight: "500",
      height: "50px",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.tertiary,
        color: theme.secondary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        width: "180px",
      },
    },
    contactBtn: {
      backgroundColor: theme.primary,
      color: theme.secondary,
      borderRadius: "30px",
      textTransform: "inherit",
      textDecoration: "none",
      width: "150px",
      height: "50px",
      fontSize: "1rem",
      fontWeight: "500",
      fontFamily: "var(--primaryFont)",
      border: `3px solid ${theme.primary}`,
      transition: "100ms ease-out",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.tertiary,
        border: `3px solid ${theme.tertiary}`,
      },
      [t.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  }));

  useEffect(() => {
    if (!bio) return;

    setPositionSequence(
      bio?.positionName.reduce((acc, current) => [...acc, current, 1000], [])
    );
  }, [bio]);

  const classes = useStyles();

  return (
    <div className="landing">
      <div className="landing--container w-full">
        <div
          className="landing--container-left"
          style={{ backgroundColor: theme.primary }}
        >
          <div className="lcl--content">
            <SocialLinks />
          </div>
        </div>

        <img
          src={SipMoonImage}
          alt=""
          className="landing--img"
          style={{
            opacity: `${drawerOpen ? "0" : "1"}`,
            borderColor: theme.secondary,
          }}
        />

        <div
          className="landing--container-right text-center md:text-left"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="lcr--content" style={{ color: theme.tertiary }}>
            <div className="mb-5">
              {!!positionSequence?.length && (
                <TypeAnimation
                  sequence={positionSequence}
                  speed={50}
                  wrapper="h6"
                  repeat={Infinity}
                />
              )}

              <h1>{bio?.displayName}</h1>

              <div
                className="space-y-2"
                dangerouslySetInnerHTML={{ __html: bio?.description.html }}
              />
            </div>

            <div className="space-x-5 ">
              {headerData.resumePdf && (
                <a
                  href={headerData.resumePdf}
                  download="resume"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className={classes.resumeBtn}>Download CV</Button>
                </a>
              )}

              {/* <NavLink to="/#contacts" smooth={true} spy="true" duration={2000}>
                <Button className={classes.contactBtn}>Contact</Button>
              </NavLink> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
