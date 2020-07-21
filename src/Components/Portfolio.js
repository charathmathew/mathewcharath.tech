import React from 'react'
import Navbar from './Navbar';
import {makeStyles} from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
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
    let linkToRepo = '';
    return (
        <div>
            <Navbar></Navbar>
            <Box component="div" className={classes.mainContainer}>
                <Grid container justify="center" alignItems="center">
                    <Grid item xs={12} sm={12} md={12}>
                        <Card variant="outlined" className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="project" width="150" height="450" image={ covidTrackerThumbnail }></CardMedia>
                                <CardContent style={{color: "#AC8408"}}>
                                    <Typography gutterBottom variant="h4">
                                        Covid-19 Tracker Application
                                    </Typography>
                                    <Typography style={{color: "#AC8408"}} variant="body2" component="p">
                                        A global covid-19 tracker application made using React.js. Material-UI and Chart.js were also used for the UI and data visualization. The application provides covid-19 data on a global scale as well as on a per country basis.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => { window.open('https://github.com/charathmathew/covid-tracker','_blank'); }} size="small" variant="contained" color="primary" startIcon={<GitHubIcon />}>View Github Repo</Button>
                                    <Button onClick={() => { window.open('https://blissful-shockley-80f55f.netlify.app/','_blank'); }} variant="contained" color="secondary" startIcon={<OpenInBrowserIcon />}>Live Site</Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                        <Card variant="outlined" className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="project" width="150" height="450" image={ apexThumbnail }></CardMedia>
                                <CardContent style={{color: "#AC8408"}}>
                                    <Typography gutterBottom variant="h4">
                                        Apex Legends Stats Tracker
                                    </Typography>
                                    <Typography style={{color: "#AC8408"}} variant="body2" component="p">
                                    A full stack web application that tracks the stats of Apex Legends players on the origin, psn and xbox platforms. Made using Vue.js and Express.js. Data is from the Tracker Network api.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => { window.open('https://github.com/charathmathew/Apex-Legends-Stats-Tracker','_blank'); }} size="small" variant="contained" color="primary" startIcon={<GitHubIcon />}>View Github Repo</Button>
                                    <Button onClick={() => { window.open('https://thawing-forest-34851.herokuapp.com/','_blank'); }} size="small" variant="contained" color="secondary" startIcon={<OpenInBrowserIcon />}>Live Site</Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                        <Card variant="outlined" className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="project" width="150" height="450" image={ portScannerThumbnail }></CardMedia>
                                <CardContent style={{color: "#AC8408"}}>
                                    <Typography gutterBottom variant="h4">
                                        Multithreaded Port Scanner
                                    </Typography>
                                    <Typography style={{color: "#AC8408"}} variant="body2" component="p">
                                        A simple multithreaded python port scanner that scans ports in the range of 1-100 of a given IP address. Indicates whether a port is open.
                                    </Typography>
                                    <Typography style={{color: "#AC8408"}} variant="body2" component="p">
                                        Usage: python port_scanner.py &lt;ip-address/hostname&gt;
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => { window.open('https://github.com/charathmathew/BasicPortScanner','_blank'); }} size="small" variant="contained" color="primary" startIcon={<GitHubIcon />}>View Github Repo</Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                        <Card variant="outlined" className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="project" width="150" height="450" image={ squashPongThumbnail }></CardMedia>
                                <CardContent style={{color: "#AC8408"}}>
                                    <Typography gutterBottom variant="h4">
                                        Squash Pong
                                    </Typography>
                                    <Typography style={{color: "#AC8408"}} variant="body2" component="p">
                                    A single player pong game where the ball bounces off three walls (top, left and bottom). You control the pong paddle with your mouse. Try to keep the ball away from the red boundary on the right.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button onClick={() => { window.open('https://github.com/charathmathew/SquashPong','_blank'); }} size="small" variant="contained" color="primary" startIcon={<GitHubIcon />}>View Github Repo</Button>
                                </CardActions>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

        </div>
    )
}

export default Portfolio
