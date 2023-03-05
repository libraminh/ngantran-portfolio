import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { FaEye } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

import placeholder from "../../../assets/png/placeholder.png";
import { routePaths } from "../../../router";
import "./SingleProject.css";

function SingleProject({ id, slug, name, content, tags, image, theme }) {
  const useStyles = makeStyles((t) => ({
    iconBtn: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 40,
      height: 40,
      borderRadius: 50,
      border: `2px solid ${theme.tertiary}`,
      color: theme.tertiary,
      transition: "all 0.2s",
      "&:hover": {
        backgroundColor: theme.secondary,
        color: theme.primary,
        transform: "scale(1.1)",
        border: `2px solid ${theme.secondary}`,
      },
    },
    icon: {
      fontSize: "1.1rem",
      transition: "all 0.2s",
      "&:hover": {},
    },
  }));

  const classes = useStyles();

  return (
    <Fade bottom>
      <Link
        to={`${routePaths.projects}/${slug}`}
        key={id}
        className="singleProject"
        style={{ backgroundColor: theme.primary400 }}
      >
        <div className="projectContent">
          <h2 id={id} style={{ color: theme.tertiary }}>
            {name}
          </h2>

          <img
            FaEye
            className="object-cover object-center rounded-lg"
            src={image ? image : placeholder}
            alt={name}
          />

          <div className="project--showcaseBtn">
            <span className={classes.iconBtn}>
              <FaEye
                id={`${name.replace(" ", "-").toLowerCase()}-demo`}
                className={classes.icon}
                aria-label="Demo"
              />
            </span>
            {/* <a
              href={code}
              target="_blank"
              rel="noreferrer"
              className={classes.iconBtn}
              aria-labelledby={`${name.replace(" ", "-").toLowerCase()} ${name
                .replace(" ", "-")
                .toLowerCase()}-code`}
            >
              <FaCode
                id={`${name.replace(" ", "-").toLowerCase()}-code`}
                className={classes.icon}
                aria-label="Code"
              />
            </a> */}
          </div>
        </div>

        <div
          className="project--desc"
          style={{
            background: theme.secondary,
            color: theme.tertiary,
          }}
          dangerouslySetInnerHTML={{
            __html: content.html.substring(0, 100) + "...",
          }}
        />

        {!!tags.length && (
          <div
            className="project--lang"
            style={{
              background: theme.secondary,
              color: theme.tertiary80,
            }}
          >
            {tags.map((tag, id) => (
              <span key={id}>{tag}</span>
            ))}
          </div>
        )}
      </Link>
    </Fade>
  );
}

export default SingleProject;
