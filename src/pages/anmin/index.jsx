import { Layout } from 'antd';
import React from 'react';
import './index.css'
import LefiNav from '../../components/Left-nav/index'
const { Header, Footer, Sider, Content } = Layout;


function Anmin() {
  return (
    <Layout style={{height:'100%'}}>
      <Sider style={{background:'#000'}}>
        <LefiNav/>
      </Sider>
      <Layout>
        <Header style={{background:'#000'}}>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default Anmin;
