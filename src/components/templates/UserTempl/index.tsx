import {FC} from "react"
import { Layout } from 'antd';
import './index.css';

const UserTmpl:FC = () => {
    const { Header, Footer, Sider, Content } = Layout;
    return (
      <>
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Sider>Sider</Sider>
            <Content>Content</Content>
          </Layout>
          <Footer>Footer</Footer>
        </Layout>
      </>
    );
}

export default UserTmpl