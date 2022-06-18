import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

class About extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div>
                    <Grid container rowSpacing={3} columnSpacing={3} justify="flex-start">
                        <Grid item xs={4}>
                            <Avatar sx={{width: 50, height: 50 }}>TB</Avatar>
                        </Grid>
                        <Grid item xs={4} >
                            <Typography variant="h3" sx={{textAlign: "center"}}>About</Typography>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        {/* Headings */}
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Typography variant="h5" sx={{textAlign: "center"}}>Interests</Typography>
                            <Typography sx={{textAlign: "center"}}>
                                This is the text about my interests
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Typography variant="h5" sx={{textAlign: "center"}}>Personality</Typography>
                            <Typography sx={{textAlign: "center"}}>This is my text for personality.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Typography variant="h5" sx={{textAlign: "center"}}>Hobbies</Typography>
                            <Typography sx={{textAlign: "center"}}>This is the text for my hobbies.</Typography>
                        </Grid>
                        {/* Bodies */}

                    </Grid>
                </div>
            </div>
        );
    }
}

export default About;