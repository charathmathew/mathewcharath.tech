import React from 'react'
import Navbar from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import {
    TextField,
    Typography,
    Button,
    Grid,
    Box
} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';


const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Box component="div">
                <Grid container justify="start">
                    <Typography variant="h3">Let's Connect</Typography>
                </Grid>
            </Box>
        </div>
    )
}

export default Contact
