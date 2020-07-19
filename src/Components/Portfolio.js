import React from 'react'
import Navbar from './Navbar';
import {makeStyles} from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
    Box,
    Card,
    Grid,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import apexThumbnail from "../images/SearchCapture.PNG"
import portScannerThumbnail from "../images/PortScanner.PNG"
import squashPongThumbnail from "../images/SquashPong.PNG"
import covidTrackerThumbnail from "../images/covidTracker.PNG"


const useStyles = makeStyles({
    mainContainer: {
        background: "#222",
        height: "100%"
    },
    cardContainer: {
        maxWidth: "500",
        margin: "5rem 20rem",
        backgroundColor: "#222",
        borderColor: "#AC8408"
    },
    '@media (max-width: 600px)': {
        cardContainer:{
            maxWidth: "300",
            margin: "5rem"
        }
    }
})

const projects = [
    {
        name: "Covid-19 Tracker Application",
        description: "This a simple global covid-tracker application made using React.js. Material-UI and Chart.js were also used for the UI and data visualization. The application provides covid-19 data on a global scale as well as on a per country basis.",
        thumbnail: covidTrackerThumbnail,
        repoLink: "https://github.com/charathmathew/covid-tracker",
        liveDemo: "https://blissful-shockley-80f55f.netlify.app/"
    },
    {
        name: "Apex Legends Stats Tracker",
        description: "A full stack web application that tracks the stats of Apex Legends players on the origin, psn and xbox platforms. Made using Vue.js and Express.js. Data is from the Tracker Network api.",
        thumbnail: apexThumbnail,
        repoLink: "https://github.com/charathmathew/Apex-Legends-Stats-Tracker",
        liveDemo: "https://thawing-forest-34851.herokuapp.com/"
    },
    {
        name: "Multithreaded Port Scanner",
        description: "A simple multithreaded python port scanner that scans ports in the range of 1-100 of a given IP address. Indicates whether a port is open. Usage: python port_scanner.py <ip-address/hostname>",
        thumbnail: portScannerThumbnail,
        repoLink: "https://github.com/charathmathew/BasicPortScanner"
    },
    {
        name: "Squash Pong",
        description: "A single player pong game where the ball bounces off three walls (top, left and bottom). You control the pong paddle with your mouse. Try to keep the ball away from the red boundary on the right.",
        thumbnail: squashPongThumbnail,
        repoLink: "https://github.com/charathmathew/SquashPong"
    },
    
]

const Portfolio = () => {
    const classes = useStyles();
    return (
        <div>
            <Navbar></Navbar>
            <Box component="div" className={classes.mainContainer}>
                <Grid container justify="center" alignItems="center">
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={12} md={12}>
                            <Card variant="outlined" className={classes.cardContainer}>
                                <CardActionArea>
                                    <CardMedia component="img" alt="project" width="150" height="450" image={ project.thumbnail }></CardMedia>
                                    <CardContent style={{color: "#AC8408"}}>
                                        <Typography gutterBottom variant="h4">
                                            { project.name }
                                        </Typography>
                                        <Typography style={{color: "#AC8408"}} variant="body2" component="p">
                                            { project.description }
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" variant="contained" color="primary" startIcon={<GitHubIcon />}>View Github Repo</Button>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

        </div>
    )
}

export default Portfolio
