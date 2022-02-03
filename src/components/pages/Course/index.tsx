import { FC } from "react"
import CourseCard from "../../molcules/CourseCard"
import BasicTemplate from "../../templates/BasicTemplate"
import { Row, Col, Divider } from 'antd';

const Courese: FC = () => {
  const textData = [
    {
      link: "",
      text: "01",
    },
    {
      link: "login",
      text: "login",
    },
    {
        link: "",
        text: "01",
      },
      {
        link: "login",
        text: "login",
      },
      {
        link: "",
        text: "01",
      },
      {
        link: "login",
        text: "login",
      },
  ];
  return (
    <>
      <BasicTemplate>
        <Divider orientation="left">
          <h2>Courses</h2>
        </Divider>
        <Row gutter={[16, 16]}>
          {textData.map((data, i) => {
            return (
              <Col span={6}>
                <CourseCard {...data} key={i} />
              </Col>
            );
          })}
        </Row>
      </BasicTemplate>
    </>
  );
};

export default Courese