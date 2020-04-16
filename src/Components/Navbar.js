import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Home from "@material-ui/icons/Home";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    avatar: {
        fontSize: 40,
        margin: "0.25rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    AppBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100%-${drawerWidth}px)`,
            marginLeft: drawerWidth
        },
        background: "#222"
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    drawerPaper: {
        width: drawerWidth,
        background: "#222"
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



const Navbar = (props) => {

    const { container } = props;
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Avatar className={classes.avatar} style={{ background:  "#AC8408" }}>MC</Avatar>
            <Divider></Divider>
            <List>
                {menuLinks.map((menuItem, index) => (
                    <ListItem button key={{index}}>
                        <ListItemIcon style={{ color: "#AC8408" }}>{menuItem.listIcon}</ListItemIcon>
                        <ListItemText style={{ color: "#AC8408" }} primary={menuItem.listText}></ListItemText>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="static" className={classes.AppBar}>
                <Toolbar>
                    <IconButton onClick={handleDrawerToggle} className={classes.menuButton}>
                        <ArrowBack style={{ color: "#AC8408" }}></ArrowBack>
                    </IconButton>
                    <Typography variant="h5" style={{ color: "#AC8408" }}>Portfolio</Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer}>
                <Hidden smUp>
                    <Drawer 
                     container={container}
                     variant="temporary"
                     open={mobileOpen} 
                     onClose={handleDrawerToggle}
                     classes={{ paper: classes.drawerPaper }}
                     ModalProps={{ keepMounted: true }}>
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown>
                    <Drawer
                     classes={{ paper: classes.drawerPaper }}
                     variant="permanent"
                     open>
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
        </div>
    )
}

export default Navbar;
