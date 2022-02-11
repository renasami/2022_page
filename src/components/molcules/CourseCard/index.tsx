import { FC } from "react";
import { Card } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom"
import {Courses} from "../../../type"


const CourseCard:FC<Courses>  = ({...props}) => {
  return (
    <>
      <Card
        style={{ width: 300, margin:10 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[<Link to={"/course/"+ props.dir}><EllipsisOutlined /></Link>]}
      >
          <p><b>{props.title}</b></p>
      </Card>
    </>
  );
};

export default CourseCard;
