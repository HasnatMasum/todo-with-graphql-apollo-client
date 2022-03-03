import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Card, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./css/alluser.css";

const GET_ALLUSER = gql`
  query($options: PageQueryOptions) {
    users(options: $options) {
      data {
        id
        username
        email
      }
    }
  }
`;

const AllUser = () => {
  const { Meta } = Card;
  const { loading, error, data } = useQuery(GET_ALLUSER);
  //console.log(data?.users?.data);
  if (loading) return "Loading...";
  if (error) return `${error}`;
  return (
    <>
      {data?.users?.data.map(user => {
        return (
          <Link to={`/user/${user.id}`} key={user.id}>
            <Card className="user-card">
              <Meta
                avatar={<Avatar size={64} icon={<UserOutlined />} />}
                title={user.username}
                description={user.email}
              />
            </Card>
          </Link>
        );
      })}
    </>
  );
};

export default AllUser;
