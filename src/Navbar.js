import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import {
    AppBar,
    Toolbar,
    ListItem,
    ListItemIcon,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from '@material-ui/core';

import {
    ArrowBack,
    AssignmentInd, 
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons';

// CSS Styles
const myStyle= makeStyles(theme => ({
    menuSliderContainer:{
        width: 250,
        background: "#222",
        height: "30rem"
    },
    avatar:{
        fontSize: 40,
        margin: "0.25rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    }
}));

const menuLinks = [
    {
        listIcon: <Home></Home>,
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd></AssignmentInd>,
        listText: "Resume"
    },
    {
        listIcon: <Apps></Apps>,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail></ContactMail>,
        listText: "Contact"
    }
]

const Navbar = () => {

    const [state, setState] = useState({
        sideNav: false
    })

    const toggleSideBar = (slider, open) => () => {
        setState({ ...state, [slider]: open});
    };

    const classes = myStyle();

    const sideBar = slider =>{
        
        // eslint-disable-next-line no-unused-expressions
        <Box className={classes.menuSliderContainer} component="div">
            <Avatar className={classes.avatar} style={{background: "#AC8408"}}>MC</Avatar>
            <Divider>Yello</Divider>
            <List>
                {menuLinks.map(function(listItem,key){
                    return(
                        <ListItem button key={key} onClick={toggleSideBar("sideNav", false)}>
                            <ListItemIcon style={{color: "#AC8408"}}>{listItem.listIcon}</ListItemIcon>
                            <ListItemText style={{color: "#AC8408"}} primary={listItem.listText}></ListItemText>
                        </ListItem>
                    )
                })}
            </List>
        </Box>
    }
    return (
        <>
            <Box component="nav">
                <AppBar position="static" style={{background: "#222"}}>
                    <Toolbar>
                        <IconButton onClick={toggleSideBar("sideNav", true)}>
                            <ArrowBack style={{color: "#AC8408"}}></ArrowBack>
                        </IconButton>
                        <Typography variant="h5" style={{color: "#AC8408"}}>
                            Portfolio
                        </Typography>
                        <Drawer open={state.sideNav} onClose={(toggleSideBar("sideNav", false))}>
                            {sideBar("slider")}
                        </Drawer>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
        
    )
}

export default Navbar
