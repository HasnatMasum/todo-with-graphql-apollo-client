import { useQuery, gql } from "@apollo/client";

const GET_ALLPOST = gql`
  query($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
`;

export const usePosts = () => {
  const { loading, error, data } = useQuery(GET_ALLPOST);

  return {
    loading,
    error,
    data
  };
};
