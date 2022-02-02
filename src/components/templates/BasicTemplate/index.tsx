import {FC} from "react"
import Header from "../../organisms/Header"
import SideBar from "../../organisms/SideBar"
import 'antd/dist/antd.css';
import './index.css';
import { Layout } from "antd";

const BasicTemplate:FC = () => {
    
    return (
      <>
      <Layout style={{ minHeight: '100vh' }}>
        <SideBar/>
        <Header/>
      </Layout>
      </>
    );
}

export default BasicTemplate