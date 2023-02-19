import { gql, useQuery } from "@apollo/client";

export const FETCH_BIO = gql`
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

export const useGetBio = () => {
  const { loading, error, data } = useQuery(FETCH_BIO);

  return { loading, error, data };
};
