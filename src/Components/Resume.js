import React from 'react';
import Navbar from './Navbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import makeStyles from "@material-ui/styles/makeStyles";

const useStyles = makeStyles(theme =>({
    root: {
        position: "absolute",
        top:"25%",
        width: "100vw",
        textAlign: "center"      
    },
    heading:{
        color: "#AC8408",
        textDecoration: "underline",
    },
    '@media (min-width: 600px)': {
        root: {
            position: "absolute",
            top:"15%",
            width: "100vw",
            textAlign: "center",
        },
    }
}));

const Resume = () => {

    const classes = useStyles();
    
    return (
        <div>
            <Navbar></Navbar>
            <Box className={classes.root}>
                <Typography className={classes.heading} variant="h3">About Me</Typography>
                <Typography variant="body1">lorem ipsum dolor sit amet</Typography>
            </Box>        
        </div>
    )
}

export default Resume
