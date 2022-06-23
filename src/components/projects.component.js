import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ProjectCard from './projectCard.component';
import axios from 'axios';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projectData: [],
            projectNames: ["ChessMem", "hypoterra", "panalyze", "simpleBlog-client"],
        }
    }

    // API call to GET github data
    componentDidMount() {
        axios.get("http://api.github.com/users/ca1c/repos")
            .then((res) => {
                const selectedProjects = res.data.filter(repo => this.state.projectNames.includes(repo.name));
                this.setState({
                    projectData: selectedProjects
                });
            })
            .catch((err) => {
                console.log(err);
            })
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
                            <Typography variant="h3" sx={{textAlign: "center"}}>Projects</Typography>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        {/* Headings */}
                        
                        {
                            this.state.projectData.map((project) => 
                                <Grid item xs={12} sm={12} md={6} lg={6} key={project.id}>
                                    <ProjectCard name={project.name}/>
                                </Grid>
                            )
                        }

                    </Grid>
                </div>
            </div>
        );
    }
}

export default Projects;