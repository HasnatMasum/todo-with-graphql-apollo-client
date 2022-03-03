import { gql, useMutation } from "@apollo/client";

const DELETE_POST = gql`
  mutation PostDelete($id: ID!) {
    deletePost(id: $id)
  }
`;

export const usePostDelete = () => {
  const [deletePost, { error }] = useMutation(DELETE_POST);

  return [deletePost, { error }];
};
