import React from "react";
//import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { Card } from "antd";
import { usePost } from "../hooks/usePost";

const Post = () => {
  const { id } = useParams();

  const { data, loading, error } = usePost(id);

  if (loading) return "Loading...";
  if (error) return "Something went wrong";

  return (
    <>
      <Card
        title={data?.post?.title}
        extra={<Link to="/">Go Home</Link>}
        style={{ width: "100%" }}
      >
        <p>{data?.post?.body}</p>
      </Card>
    </>
  );
};

export default Post;
