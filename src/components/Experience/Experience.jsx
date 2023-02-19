import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Experience.css";
import { gql, useQuery } from "@apollo/client";
import ExperienceCard from "./ExperienceCard";

const fetchExperiences = gql`
  query Experiences {
    experiences {
      company
      content {
        html
      }
      date
      id
      position
    }
  }
`;

function Experience() {
  const { theme } = useContext(ThemeContext);
  const { data } = useQuery(fetchExperiences);
  const experiences = data?.experiences || [];

  return (
    <div
      className="experience py-10"
      id="experience"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="experience-body md:space-x-10">
        <div className="experience-image">
          <img src={theme.expimg} alt="" />
        </div>

        <div className="experience-description">
          <h1 style={{ color: theme.primary }}>Experience</h1>
          {experiences.map((exp) => (
            <ExperienceCard
              key={exp.id}
              id={exp.id}
              jobtitle={exp.position}
              company={exp.company}
              date={exp.date}
              content={exp.content.html}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
