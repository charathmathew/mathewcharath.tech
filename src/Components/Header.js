import React from 'react';
import Typed from 'react-typed';
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root:{
        position: "absolute",
        top: "45.5%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center"
    },
    avatar: {
        fontSize: 55,
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "white"
    },
    subtitle: {
        color: "white"
    }
}));


const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} style={{ background:  "#AC8408" }}>MC</Avatar>
            </Grid>
            <Typography className={classes.title} variant="h4">
                Mathew Charath
            </Typography>
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Web Development","Penetration Testing"]} typeSpeed={40} backSpeed={50} loop></Typed>
            </Typography>
        </Box>
    )
;
}

export default Header
