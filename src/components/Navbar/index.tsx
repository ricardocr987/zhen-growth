import React, {useState} from 'react'
import {AppBar, Box, Grid, Toolbar, Typography, useTheme, useMediaQuery} from "@mui/material"
import DrawerComp from "../Drawer";
import {Link} from "react-scroll";
import ConnectWallet from "./connectWallet";
require('./Navbar.css');

interface NavProps{
    NavItems: any;
}

export const Navbar = ({NavItems}: NavProps) => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <AppBar sx={{backgroundImage: 'linear-gradient(90deg, rgba(215,79,213,1) 0%, rgba(255,145,0,1) 87%, rgba(255,0,0,1) 100%)'}}>
        <Toolbar>
          {isMatch ? (
          <>
            <Typography>
              LOGO
            </Typography>
            <DrawerComp NavItems={NavItems}/>
          </> ):(
          <Grid sx={{placeItems:'center'}} container>
            <Grid item xs={2}>
              <Typography>
                LOGO
              </Typography>
            </Grid>
            <Grid item xs={7} sx={{display: 'flex'}}>
              {NavItems.map((route: any) =>
                <Link className = "nav-item" to={route.ref} spy={true} smooth={true} offset={100}>
                  {route.label}
                </Link>
              )}
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={2}>
              <Box display="flex">
                <ConnectWallet/>
              </Box>
            </Grid>
          </Grid>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar;