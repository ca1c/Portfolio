import React, { Component } from 'react';
import Avatar from '@mui/material/Avatar';
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
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Typography variant="body1">
                            I am a full-stack web developer with a philosophy of efficiency and simplicity. The front and backend of a website should be designed intuitively, without much need for instruction. I build web applications simply, without any extra fuzz. Rather than taking a detail-oriented approach to building web applications, I encompass the big picture and take a philosophical approach. The user experience should be distraction-free, easy, and satisfying.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6} lg={6}>
                            <Typography variant="body1">
                            Although I tend to focus on web development, I am a developer of many facets. I indulge in low level development in the language Rust, and use Java for game development. I enjoy applying software development to other subjects I take part in, such as chess and math.
                            </Typography>
                        </Grid>
                        {/* Bodies */}

                    </Grid>
                </div>
            </div>
        );
    }
}

export default About;