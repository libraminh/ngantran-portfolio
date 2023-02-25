import React, { useContext } from "react";
import Marquee from "react-fast-marquee";

import "./Skills.css";

import { useQuery } from "@apollo/client";
import { ThemeContext } from "../../contexts/ThemeContext";
import { fetchSkills } from "../../graphql/queries";

function Skills() {
  const { theme } = useContext(ThemeContext);
  const { data } = useQuery(fetchSkills);
  const skills = data?.skills || [];

  const skillBoxStyle = {
    backgroundColor: theme.secondary,
    boxShadow: `0px 0px 30px ${theme.primary30}`,
  };

  return (
    <div className="skills" style={{ backgroundColor: theme.secondary }}>
      <div className="skillsHeader">
        <h2 style={{ color: theme.primary }}>Skills</h2>
      </div>

      <div className="skillsContainer">
        <div className="skill--scroll">
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skills.map((skill) => (
              <div className="skill--box" key={skill.id} style={skillBoxStyle}>
                <img src={skill.image.url} alt={skill.name} />
                <h3
                  style={{ color: theme.tertiary }}
                  className="text-base leading-tight"
                >
                  {skill.name}
                </h3>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Skills;
