import {FC} from "react"
import {  Layout } from 'antd';

import 'antd/dist/antd.css';
import './index.css';
const Header:FC = () => {
    const { Header, Content, Footer } = Layout;
    return (
        <>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} >
              <h1 style={{color:"white"}}>2022 spring training</h1>
          </Header>
          <Content style={{ margin: '0 16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            {/* <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div> */}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        </>
    )
}
export default Header