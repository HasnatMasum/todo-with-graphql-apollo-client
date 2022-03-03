import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Table, Modal, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { usePosts } from "../hooks/usePosts";
import { usePostUpdate } from "../hooks/usePostUpdate";
import { usePostDelete } from "../hooks/usePostDelete";

const AllPost = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [editingPost, setEditingPost] = useState({});

  const { loading, error, data } = usePosts();

  const [deletePost, { error: deleteError }] = usePostDelete();

  const [updatePost] = usePostUpdate();
  //console.log(data?.posts?.data);
  const dataSource = data?.posts?.data.map((dt, ind) => {
    return {
      key: dt.id,
      Sl: ind + 1,
      title: dt.title,
      id: dt.id
    };
  });

  const columns = [
    {
      title: "Sl",
      dataIndex: "Sl",
      key: "Sl"
    },
    {
      title: "ID",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text, { id }) => <Link to={`/post/${id}`}>{text}</Link>
    },
    {
      title: "Action",

      key: "Action",
      render: id => {
        return (
          <>
            <EditOutlined
              style={{ cursor: "pointer" }}
              onClick={() => {
                setIsEdit(true);
                setEditingPost(id);
                console.log(id);
              }}
            />
            <DeleteOutlined
              style={{ color: "red", marginLeft: "20px", cursor: "pointer" }}
              onClick={() => {
                Modal.confirm({
                  title: "Are you sure, you want to delete this post",
                  okText: "Yes",
                  okType: "danger",
                  onOk: () => {
                    deletePost({ variables: id });
                  }
                });
              }}
            />
          </>
        );
      }
    }
  ];

  if (deleteError) return `${deleteError}`;
  if (loading) return "Loading...";
  if (error) return "Something went wrong";
  return (
    <>
      <h1 style={{ textAlign: "center" }}>All Post</h1>
      <div>
        <Table dataSource={dataSource} columns={columns} />
        <Modal
          title="Update Post Title"
          visible={isEdit}
          onOk={() => {
            updatePost({
              variables: {
                id: editingPost.id,
                input: {
                  title: editingPost.title
                }
              }
            });
            setIsEdit(false);
          }}
          onCancel={() => {
            setIsEdit(false);
          }}
          okText="Update"
          cancelText="Cancel"
        >
          <Input
            value={editingPost?.title}
            onChange={e => {
              setEditingPost(prev => {
                return {
                  ...prev,
                  title: e.target.value
                };
              });
            }}
          />
        </Modal>
      </div>
    </>
  );
};

export default AllPost;
