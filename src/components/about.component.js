import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

class About extends Component {

    render() {
        return (
            <div>
                <div>
                    <Grid container rowSpacing={3} columnSpacing={3}>
                        <Grid item xs={4}>
                            <Avatar sx={{width: 50, height: 50 }}>TB</Avatar>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h3">About</Typography>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        {/* Headings */}
                        <Grid item xs={4}>
                            <Typography variant="h5">Interests</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h5">Personality</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h5">Hobbies</Typography>
                        </Grid>
                        {/* Bodies */}
                        <Grid item xs={4}>
                            <Typography>
                                This is the text about my interests
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>This is my text for personality.</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>This is the text for my hobbies.</Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default About;