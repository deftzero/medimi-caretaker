import { Layout } from 'antd';
import { Sidebar } from './Sidebar';
import { AppHeader } from './Header';
import { useState } from 'react';

const { Content } = Layout;

const contentStyles = {
  minHeight: '100vh',
  margin: '24px 24px',
  overflow: 'initial'
}

export default function AppLayout({ children }: { children: any }) {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout>
      <Sidebar collapsed={collapsed} />
      <Layout style={{ marginLeft: collapsed ? 80 : 200, transition: 'all ease-in 0.1s' }}>
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <Content style={contentStyles}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};