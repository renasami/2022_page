import {FC} from "react"
import BasicTemplate from "../../templates/BasicTemplate"
import { Navigate } from "react-router";
import { useAuthContext } from "../../../context";
import { Link } from "react-router-dom";

const Demo:FC = () => {
    const { user } = useAuthContext();
    if(!user) return <Navigate to="/login" />
    return (
        <>
        <BasicTemplate>
            <h1>Demo</h1>
            <h3><Link to="/course/1">fas</Link></h3>
        </BasicTemplate>
        </>
    )
}

export default Demo