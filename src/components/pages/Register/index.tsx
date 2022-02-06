import { FC, useState } from "react";
import AuthTemplate from "../../templates/AuthTemplate";
import { Form, Button } from "antd";
// import 'antd/dist/antd.css';
import "./style.css"
import AuthImput from "../../molcules/AuthImput"
import {auth} from "../../../firebase"
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";



const Register: FC = () => {
  const [email,setEmail] = useState<string>("")
  const [password,setPassword] = useState<string>("")
  const [username,setUsername] = useState<string>("")
  const configs = [
    {
      state:email,
      setState:setEmail,
      message:"メールアドレスを入れてください",
      label:"Email",
      hide:false
    },
    {
      state:username,
      setState:setUsername,
      message:"表示名を入れてください",
      label:"Username",
      hide:false
    },
    {
      state:password,
      setState:setPassword,
      message:"パスワードを入れてください",
      label:"Password",
      hide:true
    },
    
  ]
  const navigate = useNavigate();
  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      navigate("/login")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage)
    });

  }
  return (
    <>
      <AuthTemplate>
        <div className="auth">
          <br/>
          <h1>初回ページ</h1>
          <p>登録してください</p>
          <p>メールアドレスはパスワードを忘れた場合に必要になります</p>
          <Form className="form" name="basic" layout="vertical" autoComplete="off">
            <div className="innerForm" >
            {configs.map((conf,i) => <AuthImput key={i} {...conf}/>)}
            </div>
              <Button type="primary" htmlType="submit" onClick={register }>
                Submit
              </Button>
          </Form>
        </div>
      </AuthTemplate>
    </>
  );
};

export default Register;
