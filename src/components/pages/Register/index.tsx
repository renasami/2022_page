import { FC } from "react";
import AuthTemplate from "../../templates/AuthTemplate";
import { Form, Input, Button } from "antd";
// import 'antd/dist/antd.css';
import "./style.css"

const Register: FC = () => {
  return (
    <>
      <AuthTemplate>
        <div className="auth">
          <h1>初回ページ</h1>
          <br />
          <p>登録してください</p>
          <p>メールアドレスはパスワードを忘れた場合に必要になります</p>
          <Form className="form" name="basic" layout="vertical" autoComplete="off">
            <div className="innerForm" >
            <Form.Item
              label="Email"
              name="Email"
              rules={[
                { required: true, message: "メールアドレスを入れてください" },
              ]}
            >
              <Input />
            </Form.Item>
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
        </div>
      </AuthTemplate>
    </>
  );
};

export default Register;
