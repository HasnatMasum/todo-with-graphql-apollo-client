import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { useQuery, gql } from "@apollo/client";
import { Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./css/userPost.css";

const GET_USERPOST = gql`
  query GetUserPost($id: ID!) {
    user(id: $id) {
      email
      username
      posts {
        data {
          id
          title
        }
      }
    }
  }
`;

const User = () => {
  const { id } = useParams();
  const { Meta } = Card;
  const { loading, error, data } = useQuery(GET_USERPOST, {
    variables: { id }
  });

  if (data?.user?.username === null)
    return "Something went wrong, User not found !";
  if (loading) return "Loading...";
  if (error) return `${error}`;
  return (
    <>
      <Card className="user-card">
        <Meta
          avatar={<Avatar shape="square" size={84} icon={<UserOutlined />} />}
          title={data?.user?.username}
          description={data?.user?.email}
        />
      </Card>
      <div
        style={{
          padding: "30px 20px",
          background: "#ececec"
        }}
      >
        <h2
          style={{ textAlign: "center", marginBottom: "20px" }}
        >{`All post by ${data?.user?.username}`}</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            // justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          {data?.user?.posts?.data.map(post => {
            return (
              <div className="user-post-card" key={post.id}>
                <Link to={`/post/${post.id}`}>
                  <Card>
                    <h4>{post.title}</h4>
                  </Card>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default User;
