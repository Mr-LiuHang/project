import { Layout } from 'antd';
import React, { useState } from 'react';
import './index.css'
import LefiNav from '../../components/Left-nav/index'
const { Header, Footer, Sider, Content } = Layout;

function Anmin() {
  const [collapsed, setCollapsed] = useState(false);
  //接收子组件LefiNav组件的值
  const onOpenMenu = (collapsed) => {
    // console.log(collapsed, 'collapsed');
    setCollapsed(collapsed)
  }

  return (
    <Layout style={{ height: '100%' }}>
      <Sider style={{ background: '#000' }} collapsed={collapsed}>
        <LefiNav onOpenMenu={onOpenMenu} />
      </Sider>
      <Layout>
        <Header style={{ background: '#000' }}>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default Anmin;
