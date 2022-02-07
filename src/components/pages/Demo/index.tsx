import {FC} from "react"
import BasicTemplate from "../../templates/BasicTemplate"
import { Navigate } from "react-router";
import { useAuthContext } from "../../../context";

const Demo:FC = () => {
    const { user } = useAuthContext();
    if(!user) return <Navigate to="/login" />
    return (
        <>
        <BasicTemplate>
            <h1>Demo</h1>
        </BasicTemplate>
        </>
    )
}

export default Demo