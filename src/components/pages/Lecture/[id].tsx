import {FC, lazy, useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import BasicTemplate from "../../templates/BasicTemplate"
import ReactMarkdown from "react-markdown";
import { Button } from "antd";
import { courseList  } from "../../../texts/configs";
import {Courses} from "../../../type"



const TaggedCourse:FC = () => {
    //現在のレクチャーの内容
    const [text,setText] = useState<string>("");
    //全てのレクチャーの内容を保持
    const [lectures,setLectres] = useState<any>([]);
    //現在のコース(lectureのまとまり)を保持
    const [nowCourse, setNowCourse] = useState<Courses>();
    const [test,setTest] = useState<any>([]);
    let { id } = useParams()
    const getAllLecture = async () => {
        const now = courseList.filter(c => c.dir === id)
        setLectres(now[0].lectures.map(async (lecture) =>{
            console.log(lecture.index)
            const file = await import(`../../../texts/${id}/${lecture.index}.md`)
            const resp = await fetch(file.default)
            const contetnt  = await resp.text()
            setTest([...test,contetnt])
            return contetnt
            
        }))
        
    }
    const changeLecture = () => {
        setText(test)
        console.log("lectures:",Promise.resolve(lectures[0]))
        console.log("text:",text)
        console.log(test.toString())
    }
    useEffect(() => {
        getAllLecture()
        console.log(lectures)
    },[])
    // const navigate = useNavigate();
    
    return (
        <>
            <BasicTemplate>
                <ReactMarkdown>
                {text}
                </ReactMarkdown>
                {/* <Button onClick={getText}><Link to="/">次に進む</Link></Button> */}
                <Button onClick={()=>{changeLecture()}}>次に進む</Button>
            </BasicTemplate>
        </>
    )
}

export default TaggedCourse