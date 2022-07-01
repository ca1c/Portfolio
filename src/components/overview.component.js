import React, { Component } from 'react';
import { Grid, Typography, Avatar, List, ListItem, Stack, Link, Divider} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ProfileImage from './img/me.png';
import logo from './img/mylogo.png';
import Fade from '@mui/material/Fade';


class Overview extends Component {

    constructor(props) {
      super(props);

      this.state = {
        mounted: false,
      }
    }

    componentDidMount() {
      this.setState({
        mounted: true,
      })
    }

    render() {
        return (
            <div>
              <Fade in={this.state.mounted} {...(this.state.mounted ? { timeout: 1000 } : {})}>
                <Grid container rowSpacing={3} columnSpacing={3} justify="flex-start">
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Avatar sx={{width: 50, height: 50 }} src={logo} className="scale"></Avatar>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4}>
                        <Typography variant="h3" sx={{textAlign: "center"}}>Talon Bragg</Typography>
                    </Grid>
                    <Grid item xs={4} sm={4} md={4} lg={4}></Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                      <div className="scale">
                        <Avatar sx={{width: 300, height: 300, justifyContent: "center", display: "flex",}} src={ProfileImage}></Avatar>
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="h5">Full stack web developer.</Typography>
                        <Grid
                            container
                            direction="column"
                            justifyContent="space-between"
                            alignItems="center"
                            sx={{minHeight: "40vh"}}
                        >
                            <Grid item>

                                <List>
                                    <ListItem>
                                        <Typography variant="h6">💾 MongoDB for database</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="h6">⚡️ Express for NodeJS web server</Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="h6">⚛️ React for UI Development</Typography>
                                    </ListItem>
                                </List>
                            </Grid>
                            <Grid item>
                                <div className="buttons">
                                    <Stack direction="row" spacing={3} divider={<Divider orientation="vertical" flexItem />}>
                                        <Link href="https://github.com/ca1c">
                                            <GitHubIcon />
                                        </Link>
                                        <Link href="https://www.linkedin.com/in/talon-bragg-0a2491242/">
                                            <LinkedInIcon />
                                        </Link>
                                        <Link href="https://twitter.com/ca1cdev">
                                            <TwitterIcon />
                                        </Link>
                                    </Stack>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
              </Fade>
            </div>
        )
    }
}

export default Overview;
