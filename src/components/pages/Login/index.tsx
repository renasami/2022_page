import { FC, useEffect } from "react";
import AuthTemplate from "../../templates/AuthTemplate";
import { auth } from "../../../firebase/index";
import { Link } from "react-router-dom";
import { Form, Input, Button } from "antd";
const Login: FC = () => {
  useEffect(() => {
    const user = auth.currentUser;
    console.log(user);
    if (user) {
      console.log("User");
    } else {
      console.log("none");
    }
  }, []);
  
  return (
    <>
      <AuthTemplate>
        <h1>ログインページ</h1>
        <br />
        <p>ログインしてください</p>
        <Form
          className="form"
          name="basic"
          layout="vertical"
          autoComplete="off"
        >
          <div className="innerForm">
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "ユーザ名(id)を入れてください。" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "パスワードを入力してください。" },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </div>
          {/* <Form.Item > */}
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          {/* </Form.Item> */}
        </Form>
        <p>
          初めての人は
          <span>
            <Link to="/register">こちら</Link>
          </span>
        </p>
      </AuthTemplate>
    </>
  );
};

export default Login;
