import {
    AppstoreOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import './index.css'

function LefiNav(props) {
    const [collapsed, setCollapsed] = useState(false);
    const { onOpenMenu } = props;

    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }

    const items = [
        getItem('菜单一', 'sub1', <MailOutlined />, [
            getItem(<Link to='/menuOne/subMenuOne'>子菜单1-1</Link>, '5'),
            getItem(<Link to='/menuOne/subMenuTwo'>子菜单1-2</Link>, '6'),
        ]),
        getItem('菜单二', 'sub2', <AppstoreOutlined />, [
            getItem(<Link to='/menuOne/subMenuThree'>子菜单2-1</Link>, '9'),
            getItem(<Link to='/menuOne/subMenuFour'>子菜单2-2</Link>, '10'),
            getItem('子菜单2-3', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
        ]),
    ];

    const toggleCollapsed = () => {
        // console.log(onOpenMenu,'onOpenMenu');
        setCollapsed(!collapsed);
    };

    //监听collapsed实时状态，传值给父组件Anmin
    useEffect(()=>{
        onOpenMenu(collapsed)
    },[props,onOpenMenu,collapsed])


    return (
        <div className='left-nav'>
            <div className='left-nav-header'>
                <span>react</span>
            </div>
            <div style={{ textAlign: 'center', background: "#000022" }}>
                <Button
                    type="text"
                    onClick={toggleCollapsed}
                    style={{
                        color: '#fff',
                        fontSize: '20px'
                    }}
                >
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
            </div>

            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme="dark"
                // inlineCollapsed={collapsed}
                items={items}
            />
        </div>
    );
}

export default LefiNav;
