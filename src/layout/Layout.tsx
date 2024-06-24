import { Layout } from 'antd';
import { Sidebar } from './Sidebar';
import { AppHeader } from './Header';

const { Content } = Layout;

const contentStyles = {
  minHeight: '85dvh',
  margin: '24px 24px',
  overflow: 'initial'
}

export default function AppLayout({ children }: { children: any }) {

  return (
    <Layout hasSider>
      <Sidebar />
      <Layout style={{ marginLeft: 215 }}>
        <AppHeader />
        <Content style={contentStyles}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};