import {FC, useState} from "react"
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  LogoutOutlined,

} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './index.css';
import myjlogo from "../../../imgs/myjlab-logo.png";
import myjicon from "../../../imgs/myjlab-icon.png";
import {Link} from "react-router-dom"
import {auth} from "../../../firebase"
const SideBar:FC = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const { Sider } = Layout;
    const onCollapse = () => {
        setCollapsed(!collapsed);
    }
    const changeAuthority = () => {
      setIsAdmin(!isAdmin);
    }
    // const { SubMenu } = Menu;
    const logout = () => {
      auth.signOut();
    }
    return (
        <>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} style={{ padding: 0, backgroundColor:"white" }}>
          {
            collapsed ?
            <img id="myj" src={myjicon} className="logo" alt="none"/> 
            :<img id="myj" src={myjlogo} className="logo" alt="none"/>
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
            {
              isAdmin ? 
              <Menu.Item key="admin" icon={<UserOutlined />}>
                <Link to="/admin">admin</Link>
              </Menu.Item>:null
            }
            {
              window.location.hostname === "localhost" ? 
              <Menu.Item key="extra" icon={<UserOutlined />}>
                  <p onClick={changeAuthority}>change</p>
              </Menu.Item> : null
            }
             <Menu.Item onClick={logout} icon={<LogoutOutlined />}>
              <Link to="/login">ログアウト</Link>
            </Menu.Item>
          </Menu>
        </Sider>
    </>
    )
}

export default SideBar