import React from 'react'
import Navbar from './Navbar';
import {makeStyles} from '@material-ui/core/styles';
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


const useStyles = makeStyles({
    mainContainer: {
        background: "#222",
        height: "100%"
    },
    cardContainer: {
        maxWidth: "345",
        margin: "3rem",
        margin: "5rem 10rem"
    }
})

const projects = [
    {
        name: "Apex Legends Stats Tracker",
        description: "some description blah blah",
        thumbnail: apexThumbnail,
        repoLink: "https://github.com/charathmathew/Apex-Legends-Stats-Tracker",
        liveDemo: "https://thawing-forest-34851.herokuapp.com/"
    },
    {
        name: "Covid-19 Tracker Application",
        description: "some description blah blah",
        thumbnail: apexThumbnail,
        repoLink: "https://github.com/charathmathew/covid-tracker"
    },
    {
        name: "Multithreaded Port Scanner",
        description: "some description blah blah",
        thumbnail: portScannerThumbnail,
        repoLink: "https://github.com/charathmathew/BasicPortScanner"
    },
    {
        name: "Squash Pong",
        description: "some description blah blah",
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
                            <Card className={classes.cardContainer}>
                                <CardActionArea>
                                    <CardMedia component="img" alt="project" width="150" height="450" image={ project.thumbnail }></CardMedia>
                                    <CardContent>
                                        <Typography gutterBottom variant="h4">
                                            { project.name }
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            { project.description }
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">View Github Repo</Button>
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
