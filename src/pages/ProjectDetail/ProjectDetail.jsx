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
import { SectionHeader } from "../../components/SectionHeader";

function ProjectDetail() {
  const { slug } = useParams();

  const { data, loading } = useQuery(fetchProject, {
    variables: { slug },
  });
  const project = data?.project || {};

  if (loading) return <BaseLoader />;

  return (
    <div className="projectPage bg-[#eee]">
      <Helmet>
        <title>Projects - {project.name}</title>
      </Helmet>

      <SectionHeader name={project.name} />

      <div className="container mx-auto py-10 px-4 space-y-5">
        <img
          className="mx-auto aspect-[16/9] w-full h-full object-cover object-center max-w-4xl"
          src={project?.image[0]?.url}
          alt=""
        />

        <div className="prose text-white mx-auto max-w-none">
          <RichText content={project.content.raw.children} />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
