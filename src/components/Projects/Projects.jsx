import { makeStyles } from "@material-ui/core/styles";
import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { HiArrowRight } from "react-icons/hi";
import { ThemeContext } from "../../contexts/ThemeContext";

import { useQuery } from "@apollo/client";
import { fetchProjects } from "../../graphql/queries";
import "./Projects.css";
import SingleProject from "./SingleProject/SingleProject";

function Projects() {
  const { theme } = useContext(ThemeContext);
  const { data } = useQuery(fetchProjects);
  const projects = data?.projects || [];

  const useStyles = makeStyles(() => ({
    viewAllBtn: {
      color: theme.tertiary,
      backgroundColor: theme.primary,
      transition: "color 0.2s",
      "&:hover": {
        color: theme.secondary,
        backgroundColor: theme.primary,
      },
    },
    viewArr: {
      color: theme.tertiary,
      backgroundColor: theme.secondary70,
      width: "40px",
      height: "40px",
      padding: "0.5rem",
      fontSize: "1.05rem",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "background-color 0.2s",
      "&:hover": {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      {projects.length > 0 && (
        <div
          className="projects"
          id="projects"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="projects--header">
            <h1 style={{ color: theme.primary }}>Projects</h1>
          </div>

          <div className="projects--body">
            <div className="projects--bodyContainer">
              {projects.slice(0, 3).map((project) => (
                <SingleProject
                  theme={theme}
                  key={project.id}
                  id={project.slug}
                  slug={project.slug}
                  name={project.name}
                  content={project.content}
                  tags={project.tags}
                  image={project.image[0].url}
                />
              ))}
            </div>

            {projects.length > 3 && (
              <div className="projects--viewAll">
                <Link to="/projects">
                  <button className={classes.viewAllBtn}>
                    View All
                    <HiArrowRight className={classes.viewArr} />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
