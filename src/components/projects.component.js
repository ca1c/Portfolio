import React, { Component } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ProjectCard from './projectCard.component';
import Fade from '@mui/material/Fade';
import axios from 'axios';
import logo from './img/mylogo.png';

class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projectData: [],
            projectNames: ["Portfolio", "PortfolioContact", "ChessMem", "hypoterra", "panalyze", "simpleBlog-client"],
            fade: false
        }
    }

    // API call to GET github data
    componentDidMount() {
        axios.get("https://api.github.com/users/ca1c/repos")
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
                <Fade in={this.state.projectData.length !== 0} {...(this.state.projectData.length !== 0 ? { timeout: 1000 } : {})}>
                    <Grid container rowSpacing={3} columnSpacing={3} justify="flex-start">
                        <Grid item xs={4}>
                            <Avatar sx={{width: 50, height: 50 }} src={logo} className="scale"></Avatar>
                        </Grid>
                        <Grid item xs={4} >
                            <Typography variant="h3" sx={{textAlign: "center"}}>Projects</Typography>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        {/* Headings */}

                        {
                            this.state.projectData.map((project) =>
                                <Grid item xs={12} sm={12} md={6} lg={6} key={project.id}>
                                    <ProjectCard name={project.name} githubLink={project.html_url} description={project.description}/>
                                </Grid>
                            )
                        }

                    </Grid>
                </Fade>
            </div>
        );
    }
}

export default Projects;
