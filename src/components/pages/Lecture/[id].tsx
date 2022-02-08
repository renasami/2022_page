import {FC} from "react";
import { useParams } from "react-router-dom";
import BasicTemplate from "../../templates/BasicTemplate"

const TaggedCourse:FC = () => {
    let { id } = useParams();
    return (
        <>
            <BasicTemplate>
                <h1>id:{id}</h1>
            </BasicTemplate>
        </>
    )
}

export default TaggedCourse