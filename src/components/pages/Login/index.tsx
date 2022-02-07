import { FC, useEffect, useState } from "react";
import AuthTemplate from "../../templates/AuthTemplate";
import { auth } from "../../../firebase";
import { Link } from "react-router-dom";
import { Form,  Button } from "antd";
import {signInWithEmailAndPassword} from "firebase/auth"
import AuthImput from "../../molcules/AuthImput";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router";
import { useAuthContext } from "../../../context";

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

  const [email,setEmail] = useState<string>("")
  const [password,setPassword] = useState<string>("")
  const configs = [{
    state:email,
    setState:setEmail,
    message:"メールアドレスを入れてください",
    label:"Email",
    hide:false
  },
  {
    state:password,
    setState:setPassword,
    message:"パスワードを入れてください",
    label:"Password",
    hide:true
  }
]
  const navigator = useNavigate()
  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      navigator("/")
    })
    .catch((error) => {
    console.log(error.code,error.message)
    });
  }

  const { user } = useAuthContext();
  if(user) return <Navigate to="/" />
  
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
          {configs.map((conf,i) => <AuthImput key={i} {...conf}/>)}
          </div>
          <Button type="primary" htmlType="submit" onClick={login}>
            Submit
          </Button>
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
