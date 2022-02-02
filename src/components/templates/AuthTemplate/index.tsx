import { Layout } from "antd"
import {FC} from "react"
import Header from "../../organisms/Header"

const AuthTemplate:FC = ({children}) => {
    return (
        <>
              <Layout style={{ minHeight: '100vh' }}>
                <Header>
                    {children}
                </Header>
              </Layout>
        </>
    )
}

export default AuthTemplate