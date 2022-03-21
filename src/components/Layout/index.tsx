import Footer from '../Footer'
import React, {useState} from 'react';
import { Layout } from 'antd';
import Navbar from '../Navbar';
const { Content } = Layout;


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
      <Navbar NavItems={NavItems}/>
      <Layout>
        <Content>
          {props.children}
        </Content>
        <Footer/>
      </Layout>
    </>
  );
});
