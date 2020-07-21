import React from 'react'
import Navbar from './Navbar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
    TextField,
    Typography,
    Button,
    Grid,
    Box,
    Card,
    CardContent,
    Divider
} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
    form:{
        top: "30%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute"
    },
    button: {
        marginTop: "1rem",
        color: "#AC8408",
        borderColor: "#AC8408"
    },
    title: {
        color: "#AC8408",
        textAlign: "center"
    },
    cardContainer: {
        backgroundColor: "#222",
        borderColor: "#AC8408"
    },
    contactInfo: {
        color: "#AC8408"
    },
    divider: {
        background: "#AC8408"
    },
    '@media (max-width: 450px)': {
        form:{
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            position: "absolute"
        },
        cardContainer: {
            marginTop: "2rem",
            backgroundColor: "#222",
            borderColor: "#AC8408"
        },
    }
}))
const Contact = () => {
    
    const classes = useStyles();

    return (
        <div>
            <Navbar></Navbar>
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography className={classes.title} variant="h4">LET'S CONNECT!</Typography>
                    <Divider className={classes.divider} />
                    <br />
                    <Typography className={classes.title} style={{ marginTop: "2rem" }} variant="body1">My Email address, GitHub and LinkedIn profiles are listed below. Feel free to get in touch.</Typography>
                    <br />
                    <Card className={classes.cardContainer} variant="outlined">
                        <CardContent>
                            <Button className={classes.contactInfo} onClick={() => { window.location.href='mailto:charathmathew@gmail.com'; }} fullWidth={true} startIcon={<EmailIcon />}>charathmathew@gmail.com</Button>
                            <Divider className={classes.divider} />
                            <Button className={classes.contactInfo} onClick={() => { window.open('https://github.com/charathmathew/','_blank') }} fullWidth={true} startIcon={<GitHubIcon />}>charathmathew</Button>
                            <Divider className={classes.divider} />
                            <Button className={classes.contactInfo} onClick={() => { window.open('http://linkedin.com/in/mathew-charath/', '_blank') }} fullWidth={true} startIcon={<LinkedInIcon />}>Mathew Charath</Button>
                        </CardContent>
                    </Card>
                </Box>
            </Grid>
        </div>
    )
}

export default Contact
