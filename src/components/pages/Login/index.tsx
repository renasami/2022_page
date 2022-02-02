import {FC, useEffect} from "react";
import AuthTemplate from "../../templates/AuthTemplate"
// import firebaseApp from "../../../firebase";
import {getAuth} from "firebase/auth"
import { GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


const Login:FC = () => {
    const auth = getAuth();
    useEffect(()=> {
        const user = auth.currentUser
        console.log(user)
        if (user) {
            console.log("User")
        }else{
            console.log("none")
        }
    },[auth])
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