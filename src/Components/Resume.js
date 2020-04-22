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
    resumeLink:{
        color: "white",
        textDecoration: "underline",
    },
    '@media (min-width: 600px)': {
        root: {
            position: "absolute",
            top:"35%",
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
                <Typography variant="h3" align="center">
                    <a className={classes.resumeLink} href="https://resume.creddle.io/resume/9zieui3vnlu">Resume</a>
                </Typography>
            </Box>        
        </div>
    )
}

export default Resume
