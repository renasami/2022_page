import {FC} from "react"
import BasicTemplate from "../../templates/BasicTemplate"
import { Bar } from '@ant-design/plots';

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
        seriesField: 'year',
        
      };
    return (
        <>
            <BasicTemplate>
            <h1>Admin</h1>
            <h3>ここに進捗とかのグラフ持ってくる</h3>
            <Bar {...config} />
            </BasicTemplate>
        </>
    )
}

export default Admin