import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ProjectCard from './projectCard.component';

export default function Projects() {
    const projectData = [
        {
            name: "Project 1",
            key: 1,
        },
        {
            name: "Project 2",
            key: 2,
        },
        {
            name: "Project 3",
            key: 3,
        },
        {
            name: "Project 4",
            key: 4,
        }
    ];

    return (
        <div>
            <div>
            <Grid container rowSpacing={3} columnSpacing={3} justify="flex-start">
                        <Grid item xs={4}>
                            <Avatar sx={{width: 50, height: 50 }}>TB</Avatar>
                        </Grid>
                        <Grid item xs={4} >
                            <Typography variant="h3" sx={{textAlign: "center"}}>Projects</Typography>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        {/* Headings */}
                        
                        {
                            projectData.map((project) => 
                                <Grid item xs={12} sm={12} md={6} lg={6} key={project.key}>
                                    <ProjectCard name={project.name}/>
                                </Grid>
                            )
                        }

                    </Grid>
            </div>
        </div>
    );
}