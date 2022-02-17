import {FC, lazy, useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import BasicTemplate from "../../templates/BasicTemplate"
import ReactMarkdown from "react-markdown";
import { Button } from "antd";
import { courseList  } from "../../../texts/configs";
import {Lecture} from "../../../type"
import {highlightComponent} from "../../wrapper/highlightComponent"
import SyntaxHighlighter from "react-syntax-highlighter";
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'


const TaggedCourse:FC = () => {
    //現在のレクチャーの内容
    const [text,setText] = useState<string>("");
    //全てのレクチャーの内容を保持
    const [lec,setLectres] = useState<any>([]);
    //現在のコース(lectureのまとまり)を保持
    const [lectureIndex,setLectureIndex] = useState<number>(0);
    let { id } = useParams()
    const now = courseList.filter(c => c.dir === id)
    const getAllLecture = async () => {
        let contents:string[] = []
        now[0].lectures.forEach(async (lecture) =>{
            const file = await import(`../../../texts/${id}/${lecture.index}.md`)
            const resp = await fetch(file.default)
            const content  = await resp.text()
            contents.push(content)
            setLectres(contents)
        })
    }
    const gotoNextLecture = () => {
        if (lectureIndex === 2 ) setLectureIndex(2)
        else setLectureIndex(lectureIndex+1)
        setText(lec[lectureIndex])
    }
    const gotoBeforeLecture = () => {
        if (lectureIndex === 0) setLectureIndex(0)
        else setLectureIndex(lectureIndex-1)
        setText(lec[lectureIndex])
    }
    useEffect(() => {
        getAllLecture()
    },[])
    useEffect(() => {   
        setText(lec[lectureIndex])
    },[lec])
    // const navigate = useNavigate();
    
    return (
        <>
            <BasicTemplate>
                <ReactMarkdown
                children={text}
                 components={{
        code({node, inline, className, children, ...props}) {
          const match = /language-(\w+)/.exec(className || '')
          return !inline && match ? (
            <SyntaxHighlighter
              children={String(children).replace(/\n$/, '')}
              style={dark}
              language={match[1]}
              PreTag="div"
              // {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        }
      }}/>
                {/* <Button onClick={getText}><Link to="/">次に進む</Link></Button> */}
                <Button onClick={()=>{gotoBeforeLecture()}}>前に戻る</Button>
                <Button onClick={()=>{gotoNextLecture()}}>次に進む</Button>
            </BasicTemplate>
        </>
    )
}

export default TaggedCourse