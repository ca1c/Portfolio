import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import StorageSharpIcon from '@mui/icons-material/StorageSharp';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import mongoLogo from './img/mongodb-icon.svg';
import expressLogo from './img/expressjs-icon.svg';
import reactLogo from './img/react-icon.svg';
import nodejsLogo from './img/nodejs-icon.svg';

export default function SStack() {
    return (
        <div>
            <div>
                <Grid container rowSpacing={3} columnSpacing={3}>
                    <Grid item xs={4}>
                        <Avatar sx={{width: 50, height: 50 }}>TB</Avatar>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h3" sx={{textAlign: "center"}}>Stack</Typography>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{textAlign: "center"}}>
                        <Box component="img" src={mongoLogo}  sx={{width: "100px", height: "100px"}}/>
                        <Typography variant="h5">MongoDB</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{textAlign: "center"}}>
                        <Box component="img" src={expressLogo} sx={{width: "100px", height: "100px"}}/>
                        <Typography variant="h5">ExpressJS</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{textAlign: "center"}}>
                        <Box component="img" src={reactLogo} sx={{width: "100px", height: "100px"}}/>
                        <Typography variant="h5">React</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{textAlign: "center"}}>
                        <Box component="img" src={nodejsLogo} sx={{width: "100px", height: "100px"}}/>
                        <Typography variant="h5">NodeJS</Typography>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}