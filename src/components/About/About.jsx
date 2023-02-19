import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";
import { aboutData } from "../../data/aboutData";

function About() {
  const { theme } = useContext(ThemeContext);
  const { bio } = {};

  return (
    <div
      className="about"
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
