import React, { useState } from "react";
import { Button, Row, Input, Form, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { loginWithEmailAndPassword } from "../../service/auth";
import "./Login.scss";

const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleLoginWithEmailAndPassword = async (values) => {
    setLoading(true);
    try {
      await loginWithEmailAndPassword(values);
      console.log('login');
      history.push("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="form">
      <div className="logo">
        <img
          alt="logo"
          src="https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"
        />
        <span>My project</span>
      </div>
      <Form onFinish={handleLoginWithEmailAndPassword}>
        <Form.Item name="email" rules={[{ required: true }]} hasFeedback>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true }]} hasFeedback>
          <Input type="password" placeholder="Password" />
        </Form.Item>
        <Row>
          <Button type="primary" htmlType="submit" disabled={loading}>
            {loading ? <Spin indicator={antIcon} /> : "Login"}
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default Login;
