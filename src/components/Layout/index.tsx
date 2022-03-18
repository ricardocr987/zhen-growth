import Footer from '../Footer'
import React, {useState} from 'react';
import { Layout } from 'antd';
import Navbar from '../Navbar';
const { Header, Content } = Layout;


const NavItems = [
  { label: 'Mission', ref: '#mission' },
  { label: 'Features', ref: '#features' },
  { label: 'Roadmap', ref: '#roadmap' },
  { label: 'Team', ref: '#team' },
  { label: 'FAQ', ref: '#faq' },
];    

export const AppLayout = React.memo((props: any) => {
  return (
    <>
      <Header
        style={{
          position: 'fixed',
          zIndex: 10,
          boxShadow: 'rgba(0, 0, 0, 0.2) 0px 5px 10px 1px',
        }}
      >
        <Navbar NavItems={NavItems}/>
      </Header>
      <Layout
        style={{
          maxWidth: 1000,
          marginTop: 72,
        }}
      >
        <Content style={{ overflow: 'scroll', paddingBottom: 50 }}>
          {props.children}
        </Content>
        <Footer/>
      </Layout>
    </>
  );
});
