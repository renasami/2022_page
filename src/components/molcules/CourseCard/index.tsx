import { FC } from "react";
import { Card } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom"
const CourseCard: FC = () => {
  return (
    <>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
        actions={[<Link to="/"><EllipsisOutlined /></Link>]}
      >
          <p>test</p>
      </Card>
    </>
  );
};

export default CourseCard;
