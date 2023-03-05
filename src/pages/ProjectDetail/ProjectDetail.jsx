import { makeStyles } from "@material-ui/core/styles";
import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { AiOutlineHome } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { RichText } from "@graphcms/rich-text-react-renderer";
import BaseLoader from "../../components/Loader";
import { ThemeContext } from "../../contexts/ThemeContext";
import { fetchProject } from "../../graphql/queries";

import { routePaths } from "../../router";
import "./ProjectPage.css";

function ProjectDetail() {
  const { theme } = useContext(ThemeContext);
  const { slug } = useParams();

  const { data, loading } = useQuery(fetchProject, {
    variables: { slug },
  });
  const project = data?.project || {};

  const useStyles = makeStyles((t) => ({
    search: {
      color: theme.tertiary,
      width: "40%",
      height: "2.75rem",
      outline: "none",
      border: "none",
      borderRadius: "20px",
      padding: "0.95rem 1rem",
      fontFamily: "'Noto Sans TC', sans-serif",
      fontWeight: 500,
      fontSize: "0.9rem",
      backgroundColor: theme.secondary,
      boxShadow:
        theme.type === "dark"
          ? "inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060"
          : "inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030",
      "&::placeholder": {
        color: theme.tertiary80,
      },
      [t.breakpoints.down("sm")]: {
        width: "350px",
      },
    },
    home: {
      color: theme.secondary,
      position: "absolute",
      top: 25,
      left: 25,
      padding: "7px",
      borderRadius: "50%",
      boxSizing: "content-box",
      fontSize: "2rem",
      cursor: "pointer",
      boxShadow:
        theme.type === "dark"
          ? "3px 3px 6px #ffffff40, -3px -3px 6px #00000050"
          : "3px 3px 6px #ffffff40, -3px -3px 6px #00000050",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        color: theme.tertiary,
        transform: "scale(1.1)",
      },
      [t.breakpoints.down("sm")]: {
        fontSize: "1.8rem",
      },
    },
  }));

  const classes = useStyles();

  if (loading) return <BaseLoader />;

  return (
    <div className="projectPage" style={{ backgroundColor: theme.secondary }}>
      <Helmet>
        <title>Projects - {project.name}</title>
      </Helmet>

      <div
        className="projectPage-header"
        style={{ backgroundColor: theme.primary }}
      >
        <Link to={routePaths.home}>
          <AiOutlineHome className={classes.home} />
        </Link>
        <h1 style={{ color: theme.secondary }}>{project.name}</h1>
      </div>

      <div className="container mx-auto py-10 px-4 space-y-5">
        <img
          className="mx-auto aspect-[16/9] w-full h-full object-cover object-center max-w-4xl"
          src={project?.image[0]?.url}
          alt=""
        />

        <div className="prose text-white mx-auto">
          <RichText content={project.content.raw.children} />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
