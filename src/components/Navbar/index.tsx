import React, {useState} from 'react'
import {AppBar, Box, Grid, Toolbar, Typography, Tabs, Tab, useTheme, useMediaQuery} from "@mui/material"
import DrawerComp from "../Drawer";
import {Link} from "react-router-dom";
import ConnectWallet from "./connectWallet";

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
            <Grid item xs={6}>
              <Tabs 
                indicatorColor="secondary" 
                textColor="inherit" 
                value={value} 
                onChange={(e,val)=> setValue(val)}
              >
              {NavItems.map((route: any) =>
                <Tab key={route.path} label={route.name} component={Link} to={`/${route.name}`}>
                    {route.name}
                </Tab>              
              )}
              </Tabs>
            </Grid>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={3}>
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