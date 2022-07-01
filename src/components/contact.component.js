import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Fade from '@mui/material/Fade';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import logo from './img/mylogo.png';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fName: "",
            lName: "",
            email: "",
            bodyText: "",
            snackBarOpen: false,
            mounted: false,
            loading: false,
            snackBarMessage: "Message Sent!",
            severity: "success",
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
        this.snackBarClose = this.snackBarClose.bind(this);
    }

    componentDidMount() {
      this.setState({
        mounted: true,
      })
    }

    handleInputChange(e) {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        })
    }

    submitMessage() {
        this.setState({
            loading: true
        });

        axios({
            method: 'post',
            url: process.env.REACT_APP_CONTACT_POST,
            withCredentials: false,
            data: {
                fName: this.state.fName,
                lName: this.state.lName,
                email: this.state.email,
                bodyText: this.state.bodyText,
            }
        }).then((res) => {
            this.setState({
                snackBarOpen: true,
                snackBarMessage: "Message Sent!",
                loading: false,
                severity: "success",
            });
        }).catch((err) => {
            console.log(err);
            this.setState({
                snackBarOpen: true,
                snackBarMessage: "Error Sending Message!",
                loading: false,
                severity: "error",
            });
        })
    }

    snackBarClose() {
        this.setState({
            snackBarOpen: false,
        })
    }

    render() {
        return (
            <div>
                <FormControl>
                  <Fade in={this.state.mounted} {...(this.state.mounted ? { timeout: 1000 } : {})}>
                    <Grid container rowSpacing={3} columnSpacing={3}>
                        <Grid item xs={4}>
                            <Avatar sx={{width: 50, height: 50 }} src={logo} className="scale"></Avatar>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h3" sx={{textAlign: "center"}}>Contact</Typography>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={6}>
                            <TextField value={this.state.fName} label="First Name" name="fName" variant="outlined" sx={{width: "100%"}} onChange={this.handleInputChange}/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField value={this.state.lName} label="Last Name" name="lName" variant="outlined" sx={{width: "100%"}} onChange={this.handleInputChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField value={this.state.email} label="Email" name="email" variant="outlined" sx={{width: "100%"}} onChange={this.handleInputChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField value={this.state.bodyText} label="Message" name="bodyText" variant="outlined" rows={4} multiline sx={{width: "100%"}} onChange={this.handleInputChange}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Button onClick={this.submitMessage}>Submit</Button>
                            {
                                this.state.loading ? 
                                <CircularProgress color="success" />
                                :
                                <div></div>
                            }   
                        </Grid>
                    </Grid>
                  </Fade>
                </FormControl>
                <Snackbar open={this.state.snackBarOpen} autoHideDuration={6000} onClose={this.snackBarClose}>
                    <Alert onClose={this.snackBarClose} severity={this.state.severity} sx={{ width: '100%' }}>
                        {this.state.snackBarMessage}
                    </Alert>
                </Snackbar>
            </div>
        );
    }
}

export default Contact;
