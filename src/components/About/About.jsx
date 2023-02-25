import React, { useContext } from "react";

import { useQuery } from "@apollo/client";
import { ThemeContext } from "../../contexts/ThemeContext";
import { aboutData } from "../../data/aboutData";
import { fetchBio } from "../../graphql/queries";
import "./About.css";

function About() {
  const { theme } = useContext(ThemeContext);
  const { data } = useQuery(fetchBio);
  const { bio } = data || {};

  return (
    <div
      className="about py-10"
      id="about"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="line-styling">
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-line"
          style={{ backgroundColor: theme.primary }}
        ></div>
      </div>
      <div className="about-body">
        <div className="about-description">
          <h2 style={{ color: theme.primary }}>{bio?.wiaTitle}</h2>

          <div
            className="text-lg font-semibold"
            style={{ color: theme.tertiary80 }}
            dangerouslySetInnerHTML={{ __html: bio?.wiaContent.html }}
          />
        </div>

        <div className="about-img">
          <img
            src={aboutData.image === 1 ? theme.aboutimg1 : theme.aboutimg2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
