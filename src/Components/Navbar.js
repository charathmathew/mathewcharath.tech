import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from "@material-ui/core/AppBar";
import Home from "@material-ui/icons/Home";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import Apps from "@material-ui/icons/Apps";
import ContactMail from "@material-ui/icons/ContactMail";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    avatar: {
        fontSize: 40,
        margin: "auto",
        width: theme.spacing(12),
        height: theme.spacing(12)
    },
    AppBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100%-${drawerWidth}%)`,
            marginLeft: "none",
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: "none"
        },
        boxSizing: "border-box",
        background: "transparent",
        boxShadow: "none"
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "#AC8408"
    },
    drawerPaper: {
        width: drawerWidth,
        background: "#222"
    }
}));


const menuLinks = [
    {
        listIcon: <Home></Home>,
        listText: "Home",
        path: "/"
    },
    {
        listIcon: <AssignmentInd></AssignmentInd>,
        listText: "Resume",
        path: "/resume"
    },
    {
        listIcon: <Apps></Apps>,
        listText: "Portfolio",
        path: "/portfolio"
    },
    {
        listIcon: <ContactMail></ContactMail>,
        listText: "Contact",
        path: "/contact"
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
            <br/>
            <Divider style={{ background: "#AC8408"}}></Divider>
            <List>
                {menuLinks.map((menuItem, index) => (
                    <ListItem button key={{index}} component={Link} to={menuItem.path}>
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
                        {/*<ArrowBack style={{ color: "#AC8408" }}></ArrowBack>*/}
                        <MenuRoundedIcon />
                    </IconButton>
                    <Typography variant="h5" style={{ color: "#AC8408" }}>Mathew Charath</Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer}>
                <Drawer 
                    container={container}
                    variant="temporary"
                    open={mobileOpen} 
                    onClose={handleDrawerToggle}
                    classes={{ paper: classes.drawerPaper }}
                    ModalProps={{ keepMounted: true }}>
                    {drawer}
                </Drawer>
            </nav>
        </div>
    )
}

export default Navbar;
