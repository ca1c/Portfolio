import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

export default function Contact() {
    return (
        <div>
            <div>
                <Grid container rowSpacing={3} columnSpacing={3}>
                    <Grid item xs={4}>
                        <Avatar sx={{width: 50, height: 50 }}>TB</Avatar>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h3" sx={{textAlign: "center"}}>Contact</Typography>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={6}>
                        <TextField label="First Name" variant="outlined" sx={{width: "100%"}}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label="Last Name" variant="outlined" sx={{width: "100%"}}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label="Email" variant="outlined" sx={{width: "100%"}}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField  label="Reason For Contact" variant="outlined" rows={4} multiline sx={{width: "100%"}}/>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}