import { Row, Col } from "antd";
import "antd/dist/antd.css";
import { Routes, Route } from "react-router-dom";
import AllPost from "./components/AllPost";
import TopMenu from "./components/TopMenu";
import CreatePost from "./components/CreatePost";
import AllUser from "./components/AllUser";
import Post from "./components/Post";
import User from "./components/User";

function App() {
  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <TopMenu />
          <Routes>
            <Route path="/" element={<AllPost />}></Route>
            <Route path="/create-post" element={<CreatePost />}></Route>
            <Route path="/post/:id" element={<Post />}></Route>
            <Route path="/alluser" element={<AllUser />}></Route>
            <Route path="/user/:id" element={<User />}></Route>
          </Routes>
        </Col>
      </Row>
    </>
  );
}

export default App;
