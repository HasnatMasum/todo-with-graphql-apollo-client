import React from "react";
import { gql, useMutation } from "@apollo/client";
import { Form, Input, Button } from "antd";

const CREATE_POST = gql`
  mutation($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`;

const CreatePost = () => {
  const [form] = Form.useForm();
  const [createPost] = useMutation(CREATE_POST);
  const onFinish = values => {
    createPost({
      variables: {
        input: {
          title: values.title,
          body: values.body
        }
      }
    });
    form.setFieldsValue({ title: "", body: "" });

    console.log(values.title);
  };

  return (
    <>
      <Form
        labelCol={{ flex: "110px" }}
        labelAlign="left"
        labelWrap
        wrapperCol={{ flex: 1 }}
        colon={false}
        onFinish={onFinish}
        autoComplete="off"
        form={form}
      >
        <Form.Item label="Title" name="title">
          <Input placeholder="Write post title" />
        </Form.Item>

        <Form.Item label="Body" name="body">
          <Input placeholder="Write post body" />
        </Form.Item>

        <Form.Item label=" ">
          <Button type="primary" htmlType="submit">
            Save Post
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreatePost;
