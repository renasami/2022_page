import {FC} from "react"
import {  Layout, Button } from 'antd';

import 'antd/dist/antd.css';
import './index.css';
const Header:FC = ({children}) => {
    const { Header, Content, Footer } = Layout;
    return (
        <>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} >
              <h1 style={{color:"white"}}>2022 spring training</h1>
          </Header>
          <Content style={{ margin: '0 16px' }}>
              {children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
        </>
    )
}
export default Header