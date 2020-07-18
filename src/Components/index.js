import React from 'react'
import Navbar from './Navbar';
import Header from './Header';
import Particles from 'react-particles-js';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles({
    canvas: {
        position: "absolute",
        bottom: "1%",
        height: "100%",
        width: "100%",
        zIndex: "1"
    }
});

const Home = () => {
    const classes = useStyles();

    return (
        <div>
            <Navbar></Navbar>           
            <Particles canvasClassName={classes.canvas}
                params={{
                    particles: {
                        number: {
                            value: 100,
                            density:{
                                enable: true,
                                value_area: 900
                            }
                        },
                        color:{
                            value: "#222"
                        },
                        move:{
                            speed: 3.0,
                            straight: false
                        },
                        line_linked:{
                            opacity: 0.1,
                            color: "#AC8408"
                        }
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "grab"
                            },
                            onClick: {
                                enable: true,
                                mode: "repulse"
                            }
                        }
                    },
                    modes: {
                        grab: {
                            line_linked: {
                                distance: "200"
                            }
                        }
                    }
                }}
            />
            <Header></Header>
        </div>
    )
}

export default Home
