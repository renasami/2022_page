import { FC, lazy, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BasicTemplate from "../../templates/BasicTemplate";
import { Button } from "antd";
import { courseList } from "../../../texts/configs";
import MarkdownView from "../../MarkdownView";
import "./style.css"
const TaggedCourse: FC = () => {
  //現在のレクチャーの内容
  const [text, setText] = useState<string>("");
  //全てのレクチャーの内容を保持
  const [lec, setLectres] = useState<any>([]);
  //現在のコース(lectureのまとまり)を保持
  const [lectureIndex, setLectureIndex] = useState<number>(0);
  let { id } = useParams();
  
  const now = courseList.filter((c) => c.dir === id);
  const getAllLecture = async () => {
    let contents: string[] = [];
    now[0].lectures.map(async (lecture,i) => {
      const file = await import(`../../../texts/${id}/${i}.md`);
      const resp = await fetch(file.default);
      const content = await resp.text();
      contents.push(content);
      setLectres(contents);
    })
  };

  const gotoNextLecture = () => {
    if (lectureIndex === now[0].lectures.length - 1) setLectureIndex(now[0].lectures.length - 1);
    else setLectureIndex(lectureIndex + 1);
    setText(lec[lectureIndex]);
  };
  const gotoBeforeLecture = () => {
    if (lectureIndex === 0) setLectureIndex(0);
    else setLectureIndex(lectureIndex - 1);
    setText(lec[lectureIndex]);
  };
  useEffect(() => {
    getAllLecture();
  }, []);
  useEffect(() => {
    setText(lec[lectureIndex]);
  }, [lec]);
  // const navigate = useNavigate();

  return (
    <div>
      <BasicTemplate>
        <MarkdownView text={text} />
        {/* <Button onClick={getText}><Link to="/">次に進む</Link></Button> */}
        {
          lectureIndex === 0 ?
          null :
          <Button
          onClick={() => {
            gotoBeforeLecture();
          }}
        >
          前に戻る
        </Button>
        }
        {
          lectureIndex === now[0].lectures.length - 1 ?null:<Button
          onClick={() => {
            gotoNextLecture();
          }}
        >
          次に進む
        </Button>
        }
      </BasicTemplate>
    </div>
  );
};

export default TaggedCourse;
