import {FC, lazy, useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import BasicTemplate from "../../templates/BasicTemplate"
import ReactMarkdown from "react-markdown";



const TaggedCourse:FC = () => {
    const [text,setText] = useState<any>();
    let { id } = useParams();
    useEffect(() => {
        const getText = async (id?:string) => {
            const file = await import(`../../../texts/${id}/index.md`);
            const response = await fetch(file.default);
            const txt = await response.text();
            
            setText(txt);
        }
        getText(id)
    },[])
    return (
        <>
            <BasicTemplate>
                <ReactMarkdown>
                {text}
                </ReactMarkdown>
            </BasicTemplate>
        </>
    )
}

export default TaggedCourse