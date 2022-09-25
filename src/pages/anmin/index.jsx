import { Layout } from 'antd';
import React, { useState } from 'react';
import LefiNav from '../../components/Left-nav/index'
import { Route, Routes,Navigate } from 'react-router-dom';
import SubMenuOne from '../menuOne/subMenuOne';
import SubMenuTwo from '../menuOne/subMenuTwo';
import SubMenuThree from '../menuOne/subMenuThree';
import SubMenuFour from '../menuOne/subMenuFour';
import './index.css'
const { Header, Footer, Sider, Content } = Layout;

function Anmin() {
  const [collapsed, setCollapsed] = useState(false);
  const [menuName, setMenuName] = useState('子菜单1-1');
  //接收子组件LefiNav组件的值
  const onOpenMenu = (collapsed) => {
    // console.log(collapsed, 'collapsed');
    setCollapsed(collapsed)
  }
  //接收SubMenuOne组件的值
  const getIptValue=(value)=>{
    // console.log(value,'----');
    setMenuName(value)
  }

  return (
    <Layout style={{ height: '100%' }}>
      <Sider style={{ background: '#000' }} collapsed={collapsed}>
        <LefiNav onOpenMenu={onOpenMenu} menuName={menuName} />
      </Sider>
      <Layout>
        <Header style={{ background: '#000' }}>Header</Header>
        <Content>
          <Routes>
            <Route path='/' element={<Navigate to='/menuOne/subMenuOne'/>} />
            <Route path='/menuOne/subMenuOne' element={<SubMenuOne getIptValue={getIptValue}/>}></Route>
            <Route path='/menuOne/subMenuTwo' element={<SubMenuTwo />}></Route>
            <Route path='/menuOne/subMenuThree' element={<SubMenuThree />}></Route>
            <Route path='/menuOne/subMenuFour' element={<SubMenuFour />}></Route>
          </Routes>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
}

export default Anmin;
