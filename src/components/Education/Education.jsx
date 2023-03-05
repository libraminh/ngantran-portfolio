import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { fetchEducation } from "../../graphql/queries";
import BaseLoader from "../Loader";
import "./Education.css";
import EducationCard from "./EducationCard";

function Education() {
  const { theme } = useContext(ThemeContext);
  const { data, loading } = useQuery(fetchEducation);
  const { educations } = data || [];

  if (loading) return <BaseLoader />;

  return (
    <div
      className="education py-10"
      id="resume"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="education-body">
        <div className="education-description">
          <h1 style={{ color: theme.primary }}>Education</h1>
          {educations?.map((edu) => (
            <EducationCard
              key={edu.id}
              id={edu.id}
              institution={edu.subTitle}
              course={edu.title}
              date={edu.date}
            />
          ))}
        </div>
        <div className="education-image">
          <img src={theme.eduimg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Education;
