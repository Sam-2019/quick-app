import { Layout } from "antd";
import Navbar from "../Navigation/Navbar";

const { Content } = Layout;

interface PropType {
  children: any;
}

const AppLayout = ({ children }: PropType) => {
  return (
    <Layout>
      <Layout className="site-layout">
        <Navbar toggle collapsed showDrawer visible />
        <Content
          className="site-layout-background"
          style={{
            padding: "10px",
            minHeight: 750,
            //  border: "1px solid red",
          }}
        >
          {/* <BreadCrumb /> */}
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
