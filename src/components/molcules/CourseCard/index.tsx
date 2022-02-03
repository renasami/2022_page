import { FC } from "react";
import { Card } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom"

type Props = {
    link:string
    text:string
}

const CourseCard:FC<Props>  = ({link,text}) => {
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
        actions={[<Link to={"/"+link}><EllipsisOutlined /></Link>]}
      >
          <p>{text}</p>
      </Card>
    </>
  );
};

export default CourseCard;
