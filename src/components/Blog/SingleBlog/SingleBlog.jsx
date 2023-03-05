import React from "react";
import Fade from "react-reveal/Fade";

import placeholder from "../../../assets/png/placeholder.png";
import "./SingleBlog.css";

function SingleBlog({ theme, title, desc, date, image, url, id }) {
  return (
    <Fade bottom>
      <a
        className="singleBlog"
        key={id}
        href={url}
        target="_blank"
        rel="noreferrer"
        style={{ backgroundColor: theme.primary400 }}
      >
        <div
          className="singleBlog--image"
          style={{ backgroundColor: theme.secondary }}
        >
          <img src={image ? image : placeholder} alt={title} />
        </div>

        <div className="singleBlog--body text-white">
          <p>{date}</p>
          <h3>{title}</h3>
          <h6>{desc}</h6>
        </div>
      </a>
    </Fade>
  );
}

export default SingleBlog;
