import React from 'react';
import { Layout, Image, Typography} from "antd";
import Logo from "./images/instaverse.png"
const {Title} = Typography;
const {Header, Footer} = Layout;

const App = () => {
    return (
       <Layout>
            <Header>
                <Image width='45' preview='false' src={Logo} />
            </Header>
       </Layout>
    )
}

export default App;