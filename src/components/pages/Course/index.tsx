import { FC, useEffect, useState } from "react"
import CourseCard from "../../molcules/CourseCard"
import BasicTemplate from "../../templates/BasicTemplate"
import { Row, Col, Divider } from 'antd';
import { useAuthContext } from "../../../context";
import { Navigate } from "react-router";
import {courseList} from "../../../texts/configs"
const Courese: FC = () => {

  const { user } = useAuthContext();
 

  if(!user) return <Navigate to="/login" />
  return (
    <>
      <BasicTemplate>
        <Divider orientation="left">
          <h2>Courses</h2>
        </Divider>
        <Row gutter={[16, 16]}>
          {courseList.map((data, i) => {
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