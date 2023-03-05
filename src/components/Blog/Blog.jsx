import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { HiArrowRight } from "react-icons/hi";

import "./Blog.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { blogData } from "../../data/blogData";
import SingleBlog from "./SingleBlog/SingleBlog";
import { routePaths } from "../../router";
import { useQuery } from "@apollo/client";
import BaseLoader from "../Loader";
import { fetchPosts } from "../../graphql/queries";

function Blog() {
  const { theme } = useContext(ThemeContext);
  const { data, loading } = useQuery(fetchPosts);
  const { posts } = data || [];

  const useStyles = makeStyles(() => ({
    viewAllBtn: {
      color: theme.tertiary,
      backgroundColor: theme.primary,
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
      "&:hover": {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
      },
    },
  }));

  const classes = useStyles();

  if (loading) return <BaseLoader />;

  return (
    <>
      {blogData.length > 0 && (
        <div
          className="blog"
          id="blog"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="blog--header">
            <h1 style={{ color: theme.primary }}>Blog</h1>
          </div>
          <div className="blog--body">
            <div className="blog--bodyContainer">
              {posts?.slice(0, 3).map((post) => (
                <SingleBlog theme={theme} post={post} key={post.id} />
              ))}
            </div>

            {blogData.length > 3 && (
              <div className="blog--viewAll">
                <Link to={routePaths.blog}>
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

export default Blog;
