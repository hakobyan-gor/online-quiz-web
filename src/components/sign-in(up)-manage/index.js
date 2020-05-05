import React, { useState } from 'react';
import { Button, ButtonGroup, Grid, makeStyles, CssBaseline, Paper } from '@material-ui/core';
import SignIn from '../../pages/sign-in';
import SignUp from '../../pages/sign-up';

export default function Managment() {

    let [showSignInForm, setShowSignInForm] = useState(true)
    let [showSignUpForm, setShowSignUpForm] = useState()

    const useStyles = makeStyles((theme) => ({
        root: {
            minHeight: '-webkit-fill-available',
        },
        image: {
            [theme.breakpoints.down('lg')]: {  
            },
            [theme.breakpoints.up('lg')]: {
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',    
            },

        },
        buttonGroup: {
            marginTop: theme.spacing(2),
            marginRight: theme.spacing(4)
        },
    }))

    const showSignIn = () => {
        if (showSignInForm) { }
        else {
            setShowSignInForm(true)
            setShowSignUpForm(false)
        }
    }

    const showSignUp = () => {
        if (showSignUpForm) { }
        else {
            setShowSignUpForm(true)
            setShowSignInForm(false)
        }
    }

    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={2} md={3} lg={8} xl={9} className={classes.image} />
            <Grid item xs={12} sm={8} md={6} lg={4} xl={3} component={Paper} elevation={6} square className={classes.forms}>
                <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                >
                    <ButtonGroup className={classes.buttonGroup}>
                        <Button
                            onClick={showSignIn}
                            variant={showSignInForm ? "contained" : "outlined"}
                            color="primary">Sign In</Button>
                        <Button
                            onClick={showSignUp}
                            variant={showSignUpForm ? "contained" : "outlined"}
                            color="primary">Sign Up</Button>
                    </ButtonGroup>
                </Grid>
                {showSignInForm && <SignIn />}
                {showSignUpForm && <SignUp />}
            </Grid>
        </Grid>
    )

}