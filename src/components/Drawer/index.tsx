import React, {useState} from 'react'
import {Drawer, IconButton, ListItemButton, List, ListItemIcon, ListItemText} from "@mui/material"
import MenuRoundedIcon from"@mui/icons-material/MenuRounded";
import {Link} from "react-router-dom"


interface NavProps{
    NavItems: any;
}

export const DrawerComp = ({NavItems}: NavProps) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Drawer PaperProps = {{
                sx: {backgroundImage: "linear-gradient(180deg, rgba(215,79,213,1) 0%, rgba(255,145,0,1) 66%, rgba(255,255,255,1) 100%)"}
                }} 
                open={open} 
                onClose={() => setOpen(false)}>
                <List >
                    {NavItems.map((route: any) =>
                        <ListItemButton onClick={()=>setOpen(false)} key={route.path} divider>
                            <ListItemIcon>
                                <Link style={{textDecoration: "none", color:"white"}} to={`/${route.name}`}>
                                    {route.name}
                                </Link>
                            </ListItemIcon>
                        </ListItemButton>
                    )}
                </List>
            </Drawer>
            <IconButton sx={{marginLeft:"auto"}} onClick={()=>setOpen(!open)}>
                <MenuRoundedIcon/>
            </IconButton>
        </>
    )
}
export default DrawerComp;