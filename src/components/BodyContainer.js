import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Router, Route, Link } from 'react-router';
//import { NavLink, Route } from 'react-router-dom'; 
//import PostForm  from './posts/PostForm';
import './App.css'
import PostForm from './posts/PostForm';

const { Header, Footer, Content, Sider} = Layout;
const SubMenu = Menu.subMenu


export default class Widgets extends Component {
    render () {
      const { allposts} = this.props
        return (
           <Layout style={{ minHeight: '100vh' }}>
                <Header>
                    <h2 style={{color:"White"}}>React app</h2>
                </Header>
                <Layout>
                    <Sider>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span><Link to="/twitter">Twitter</Link></span>
                            </Menu.Item>
                            <Menu.Item key="2">
                            <Icon type="pie-chart" />
                            <span><Link to="/posts">Posts</Link></span>
                            </Menu.Item>
                            <Menu.Item key="3">
                            <Icon type="desktop" />
                            <span>Facebook</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout >
                            <Content style={{ margin: '0 16px',marginTop:"10px" }}>
                                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                                {allposts}
                                </div>
                            </Content>
                            <Footer style={{ textAlign: 'center' }}>
                            Ant Design ©2018 Created by Ant UED
                            </Footer>
                    </Layout>
                </Layout>
           </Layout>
           
        )
      }
}

