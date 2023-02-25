import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { fetchExperiences } from "../../graphql/queries";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard";

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
          <h1 style={{ color: theme.primary }}>Experiences</h1>

          <div className="space-y-5">
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
    </div>
  );
}

export default Experience;
