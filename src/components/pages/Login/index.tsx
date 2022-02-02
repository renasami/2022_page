import {FC, useEffect} from "react";
import AuthTemplate from "../../templates/AuthTemplate"
import { GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth } from "../../../firebase/index"

const Login:FC = () => {
    useEffect(()=> {
        const user = auth.currentUser
        console.log(user)
        if (user) {
            console.log("User")
        }else{
            console.log("none")
        }
    },[])
    const uiConfig = {
        signInFlow: 'popup',
        signInSuccessUrl: "/",
        signInOptions: [
            GoogleAuthProvider.PROVIDER_ID,
            EmailAuthProvider.PROVIDER_ID,
        ],
    }
    
    return (
        <>
            <AuthTemplate>
                <h1>ログインページ</h1>
                <br/>
                <p>ログインしてください</p>
                <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
                <p>初めての人は<span><a href="/">こちら</a></span></p>
            </AuthTemplate>
        </>
    )
}

export default Login