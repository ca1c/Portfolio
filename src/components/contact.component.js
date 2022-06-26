import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
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
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
        this.snackBarClose = this.snackBarClose.bind(this);
    }

    handleInputChange(e) {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        })
    }

    submitMessage() {

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
                    <Grid container rowSpacing={3} columnSpacing={3}>
                        <Grid item xs={4}>
                            <Avatar sx={{width: 50, height: 50 }} src={logo}></Avatar>
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
                        </Grid>
                    </Grid>
                </FormControl>
                <Snackbar open={this.state.snackBarOpen} autoHideDuration={6000} onClose={this.snackBarClose}>
                    <Alert onClose={this.snackBarClose} severity="success" sx={{ width: '100%' }}>
                        Message Sent!
                    </Alert>
                </Snackbar>
            </div>
        );
    }
}

export default Contact;
