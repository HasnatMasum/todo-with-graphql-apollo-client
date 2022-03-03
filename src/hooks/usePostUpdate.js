import { gql, useMutation } from "@apollo/client";

const UPDATE_POST = gql`
  mutation($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      title
    }
  }
`;

export const usePostUpdate = () => {
  const [updatePost] = useMutation(UPDATE_POST);

  return [updatePost];
};
