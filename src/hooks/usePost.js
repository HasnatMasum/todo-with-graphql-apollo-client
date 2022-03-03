import { useQuery, gql } from "@apollo/client";

const GET_POST = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      id
      title
      body
    }
  }
`;

export const usePost = id => {
  const { data, loading, error } = useQuery(GET_POST, { variables: { id } });

  return {
    loading,
    error,
    data
  };
};
