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
import {Link} from "react-router-dom"

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
          
          <Menu theme="light" mode="inline" >
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/">top</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              <Link to="/course">course</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              <Link to="/demo">demo</Link>
            </Menu.Item>
          </Menu>

        </Sider>
    </>
    )
}

export default SideBar