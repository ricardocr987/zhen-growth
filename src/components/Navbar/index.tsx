import React, {useEffect, useState} from 'react';
import Sidebar from "../Sidebar";
import {Link} from "react-scroll";
import ConnectWallet from "./connectWallet";
import {Row, Col} from 'react-bootstrap';
import {FaBars} from 'react-icons/fa'
require('./Navbar.css');

interface NavProps{
    NavItems: any;
}

export const Navbar = ({NavItems}: NavProps) => {
  
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);


  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  const [navbar, setNavbar] = useState(false);
  window.addEventListener('scroll', changeBackground);

  return (
    <>
      <div className='nav'>
        <div className={ sidebar ? 
              'hide'
            :
              navbar ? 
                'navbar-container active' 
              : 
                'navbar-container'
          }>
          
          <div className="navbar-logo">
              LOGO
          </div>

          <div className={'mobile-icon'}>
            <FaBars onClick={showSidebar}/>
          </div>
          
          <Row className={"nav-menu"}>
            {NavItems.map((route: any) =>
              <Col className='nav-item'>
                <Link className='nav-links' to={route.ref} spy={true} smooth={true} offset={-90}>
                  {route.label}
                </Link>
              </Col>
            )}
          </Row>

          <div className='connect-wallet'>
            <ConnectWallet/>
          </div>


        </div>
      </div>
      <Sidebar NavItems={NavItems} sidebar={sidebar} showSidebar={showSidebar}/>
    </>
  )
}

export default Navbar;