import { gql } from "@apollo/client";

export const fetchBio = gql`
  query BIO {
    bio(where: { id: "cleb2c83bwylo0blr45u94dhj" }) {
      displayName
      positionTitle
      description {
        html
      }
      wiaTitle
      wiaContent {
        html
      }
    }
  }
`;

export const fetchSkills = gql`
  query Skills {
    skills {
      id
      name
      image {
        url
      }
    }
  }
`;

export const fetchExperiences = gql`
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

export const fetchProjects = gql`
  query Projects {
    projects {
      id
      name
      slug
      tags
      description
      image {
        url
      }
    }
  }
`;
