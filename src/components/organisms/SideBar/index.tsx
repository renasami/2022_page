import {FC, useState} from "react"
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,

} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './index.css';
import myjlogo from "../../../imgs/myjlab-logo.png";
import myjicon from "../../../imgs/myjlab-icon.png";
const SideBar:FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const onCollapse = () => {
        setCollapsed(!collapsed);
    }
    const { Sider } = Layout;
    // const { SubMenu } = Menu;

    return (
        <>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ padding: 0, backgroundColor:"white" }}>
          {
            collapsed ?
            <img src={myjicon} className="logo" alt="none"/> 
            :<img src={myjlogo} className="logo" alt="none"/>
          }
          
          <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              top
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              course
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              demo
            </Menu.Item>
          </Menu>

        </Sider>
    </>
    )
}

export default SideBar