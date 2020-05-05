import React, { Component, useState } from 'react'
import './index.css'
import Grid from '@material-ui/core/Grid'
import { withStyles, Button, TextField, InputAdornment, Avatar, Typography, FormControlLabel, Checkbox, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import PropTypes from 'prop-types';
import SignInService from '../../platform/services/sign-in/SignInService'

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usename: '',
            password: '',
            remember_me: false,
            show: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.showPassword = this.showPassword.bind(this)
        this.signIn = this.signIn.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    showPassword() {
        if (this.state.show === true)
            this.setState({ show: false })
        else
            this.setState({ show: true })
    }

    signIn(){
        let signInRequest = {
            "username" : this.state.usename,
            "password" : this.state.password
        }
        SignInService.signIn(signInRequest).then(response => console.log(response))
    }

    render() {

        const { classes } = this.props

        return (
            <Grid container className={classes.root}>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <form className={classes.form}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="username"
                            name="usename"
                            label="Username"
                            autoFocus
                            onChange={this.handleChange}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type={this.state.show ? "text" : "password"}
                            onChange={this.handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end" className={classes.eyeIcon}>
                                        {this.state.show ? <VisibilityOffOutlinedIcon onClick={this.showPassword} color="primary" /> : <VisibilityOutlinedIcon onClick={this.showPassword} color="primary" />}
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Grid container className={classes.topSpacing}>
                            <Grid item xs>
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember Me"
                                />
                            </Grid>
                            <Grid item>
                                <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={this.signIn}
                                >Sign In</Button>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.topSpacing}>
                            <Grid item xs>
                                <Link href="#" variant="body2">Forgot password?</Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Don't have an account? Join us
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid container className={classes.iconsGroup}>
                            <Button className={classes.signInWith} variant='outlined'>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' alt='google' className={classes.signInImg} />
                                <Typography className={classes.signInText} variant='body1'>Join with Google</Typography>
                            </Button>
                            <Button className={classes.signInWith} variant='outlined'>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg' alt='google' className={classes.signInImg} />
                                <Typography className={classes.signInText} variant='body1'>Join with Facebook</Typography>
                            </Button>
                            <Button className={classes.signInWith} variant='outlined'>
                                <img src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' alt='google' className={classes.signInImg} />
                                <Typography className={classes.signInText} variant='body1'>Join with LinkedIn</Typography>
                            </Button>
                        </Grid>
                    </form>
                </div>
            </Grid>
        )
    }
}

const styles = theme => ({
    root: {
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    form: {
        width: "100%",
        marginTop: theme.spacing(1),
    },
    submit: {
        float: "right",
    },
    topSpacing: {
        marginTop: theme.spacing(2),
        ['@media (max-width:450px)']: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    iconsGroup: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    signInWith: {
        [theme.breakpoints.up('xs')]: {
            width: '250px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
        margin: theme.spacing(0.75, 0, 0.75, 0),
    },
    signInImg: {
        height: '25px',
        [theme.breakpoints.up('xs')]: {
            width: '25px',
        },
        [theme.breakpoints.down('xs')]: {
            width: '10%',
        },
    },
    signInText: {
        [theme.breakpoints.up('xs')]: {
            width: '225px',
        },
        [theme.breakpoints.down('xs')]: {
        },
        textTransform: 'none'

    },
    eyeIcon: {
        '&:hover': {
            cursor: 'pointer',
        },
    },
})

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SignIn)