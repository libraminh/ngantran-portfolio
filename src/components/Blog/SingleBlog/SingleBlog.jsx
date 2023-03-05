import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

import placeholder from "../../../assets/png/placeholder.png";
import { routePaths } from "../../../router";
import "./SingleBlog.css";

function SingleBlog({ post, theme }) {
  return (
    <Fade bottom>
      <Link
        className="singleBlog"
        key={post.id}
        to={`${routePaths.blog}/${post.slug}`}
        style={{ backgroundColor: theme.primary400 }}
      >
        <div
          className="singleBlog--image"
          style={{ backgroundColor: theme.secondary }}
        >
          <img
            src={post.coverImage ? post.coverImage.url : placeholder}
            alt={post.title}
          />
        </div>

        <div className="singleBlog--body text-white w-full">
          <p>{post.date}</p>
          <h3>{post.title}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: post.content
                ? post.content?.html.substring(0, 100) + "..."
                : "Sample Content",
            }}
          />
        </div>
      </Link>
    </Fade>
  );
}

export default SingleBlog;
