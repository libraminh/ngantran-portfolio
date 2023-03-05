import { gql } from "@apollo/client";

export const fetchBio = gql`
  query BIO {
    bio(where: { id: "cleb2c83bwylo0blr45u94dhj" }) {
      displayName
      description {
        html
      }
      wiaTitle
      wiaContent {
        html
      }
      positionName
    }
  }
`;

export const fetchSocial = gql`
  query Social {
    social(where: { id: "ckxj6dmpcgi2t0b05d096vamn" }) {
      id
      phoneNumber
      linkedinUrl
      emailAddress
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
      content {
        raw
        html
      }
      image {
        url
      }
    }
  }
`;

export const fetchProject = gql`
  query Project($slug: String!) {
    project(where: { slug: $slug }) {
      name
      tags
      content {
        raw
        html
      }
      slug
      id
      image {
        url
      }
    }
  }
`;

export const fetchEducation = gql`
  query EDUCATION {
    educations {
      id
      title
      subTitle
      date
    }
  }
`;

export const fetchPosts = gql`
  query Posts {
    posts {
      id
      slug
      date
      title
      content {
        raw
        html
      }
      coverImage {
        url
      }
    }
  }
`;

export const fetchPost = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      slug
      date
      title
      content {
        raw
        html
      }
      coverImage {
        url
      }
    }
  }
`;
