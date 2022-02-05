import {FC} from "react"
import BasicTemplate from "../../templates/BasicTemplate"
import { Bar } from '@ant-design/plots';
import { Pie } from '@ant-design/plots';
import { Row, Col } from "antd";

const Admin:FC = () => {
    const data = [
        {
          year: '1951 年',
          value: 38,
        },
        {
          year: '1952 年',
          value: 52,
        },
        {
          year: '1956 年',
          value: 61,
        },
        {
          year: '1957 年',
          value: 145,
        },
        {
          year: '1958 年',
          value: 48,
        },
      ];
      const config = {
        data,
        xField: 'value',
        yField: 'year',
        // seriesField: 'year',
        colorField:"year"
      };
      const pieConfig = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'year',
        radius: 1,
        innerRadius: 0.6,
        label: {
          type: 'inner',
          offset: '-50%',
          content: '{value}',
          style: {
            textAlign: 'center',
            fontSize: 14,
          },
        },
        interactions: [
          {
            type: 'element-selected',
          },
          {
            type: 'element-active',
          },
        ],
        statistic: {
          title: false,
          content: {
            style: {
              whiteSpace: 'pre-wrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
            content: '%',
          },
        },
      };
    return (
        <>
            <BasicTemplate>
            <h1>Admin</h1>
            <h3>ここに進捗とかのグラフ持ってくる</h3>
            <Row style={{ margin: '10px'}}>
                <Col span={18} ><Bar {...config} /></Col>
                <Col span={6} ><Pie {...pieConfig} /></Col>
            </Row> 
            </BasicTemplate>
        </>
    )
}

export default Admin