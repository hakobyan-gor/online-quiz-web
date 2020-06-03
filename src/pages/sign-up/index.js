import { Button, TextField, IconButton, InputAdornment, Typography, createMuiTheme, makeStyles, Slide, Paper } from '@material-ui/core'
import AuthenticationService from '../../platform/services/authentication/AuthenticationService'
import SignUpService from '../../platform/services/sign-up/SignUpService'
import AccountCircle from '@material-ui/icons/AccountCircle'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Visibility from '@material-ui/icons/Visibility'
import ROUTES from '../../platform/constants/routes'
import LockIcon from '@material-ui/icons/Lock'
import { useHistory } from 'react-router-dom'
import Email from '@material-ui/icons/Email'
import Grid from '@material-ui/core/Grid'
import React, { useState } from 'react'
import colors from '../../resources/colors'

function SignUp() {

    const [values, setValues] = useState({
        showConfirmationTokenForm: false,
        confirmationToken: '',
        firstName: '',
        lastName: '',
        password: '',
        eMail: '',
    })
    const history = useHistory();
    const classes = useStyles()

    const handleConfirmationToken = (event) => {
        let bool = /^(\s*|\d+)$/.test(event.target.value)
        if (bool) {
            setValues({ ...values, confirmationToken: event.target.value })
            if (event.target.value.length === 6) {
                SignUpService.verifyEmail(event.target.value).then(
                    response => {
                        if (response.data.success) {
                            AuthenticationService.logInUser(response.data.data)
                            history.push(ROUTES.HOME)
                        } else {
                            // something 
                            // todo
                        }
                    }
                )
            }
        }
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword })
    }

    const handleChange = (props) => (event) => {
        setValues({ ...values, [props]: event.target.value })
    }

    const showConfirmationTokenForm = () => {
        setValues({ showConfirmationTokenForm: true })
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    const signUp = () => {
        let signUpRequest = {
            firstName: values.firstName,
            lastName: values.lastName,
            password: values.password,
            eMail: values.eMail,
        }
        SignUpService.signUp(values.firstName, values.lastName, values.password, values.eMail).then(
            response => {
                console.log(response.data)
                if (response.data.success === true) {
                    AuthenticationService.setPendingUserId(response.data.data)
                    showConfirmationTokenForm()
                } else {
                    console.log(response.data.message)
                }
            }
        )
    }

    return (
        <div className={classes.root}>
            <Grid container component='main' className={classes.baseGrid}>
                <Grid item xs={12} sm={6}>
                    <div className={classes.paper}>
                        <Typography component='h1' variant='h4' className={classes.signIn}>
                            Sign up
                        </Typography>
                        <form className={classes.form}>
                            <div className={classes.fields}>
                                <AccountCircle />
                                <TextField
                                    onChange={handleChange('firstName')}
                                    className={classes.leftSpacing}
                                    value={values.firstName}
                                    placeholder='First Name'
                                    name='firstName'
                                    id='firstName'
                                    type="text"
                                    fullWidth
                                    autoFocus
                                />
                                <TextField
                                    onChange={handleChange('lastName')}
                                    className={classes.leftSpacing}
                                    value={values.lastName}
                                    placeholder='Last Name'
                                    name='lastName'
                                    id='lastName'
                                    type="text"
                                    fullWidth
                                />
                            </div>
                            <div className={classes.fields}>
                                <Email />
                                <TextField
                                    onChange={handleChange('eMail')}
                                    className={classes.leftSpacing}
                                    value={values.eMail}
                                    placeholder='Your Email'
                                    name='eMail'
                                    type='email'
                                    id='eMail'
                                    fullWidth
                                />
                            </div>
                            <div className={classes.fields}>
                                <LockIcon />
                                <TextField
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position='end'>
                                                <IconButton
                                                    aria-label='toggle password visibility'
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {
                                                        !values.showPassword
                                                            ?
                                                            <Visibility />
                                                            :
                                                            <VisibilityOff />
                                                    }
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                    type={values.showPassword ? 'text' : 'password'}
                                    onChange={handleChange('password')}
                                    className={classes.leftSpacing}
                                    value={values.password}
                                    placeholder='Password'
                                    name='password'
                                    id='password'
                                    fullWidth
                                />
                            </div>
                            <div>
                                <Button
                                    className={classes.signUpButton}
                                    variant='contained'
                                    onClick={signUp}
                                    color='primary'
                                >
                                    Register
                            </Button>
                            </div>
                            <div className={classes.fields}>
                                {
                                    values.showConfirmationTokenForm
                                        ?
                                        <div>
                                            <p>Your confirmation Token has been sent</p>
                                            <p>Please, type it below</p>
                                            <TextField
                                                placeholder='Your Confirmation Token'
                                                onChange={handleConfirmationToken}
                                                value={values.confirmationToken}
                                                name='conf_token'
                                                id='conf_token'
                                                type='text'
                                            />
                                        </div>
                                        :
                                        <div></div>
                                }
                            </div>
                        </form>
                    </div>
                </Grid>
                <Grid item xs={false} sm={6}></Grid>
            </Grid>
        </div >
    )

}

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('sm')]: {
            margin: theme.spacing(8, 8),
            borderRadius: '12px',
        },
    },
    baseGrid: {
        padding: theme.spacing(1),
    },
    signIn: {
        fontWeight: 'bold',
    },
    paper: {
        margin: theme.spacing(8, 4),
        flexDirection: 'column',
        alignItems: 'left',
        display: 'flex',
    },
    form: {
    },
    fields: {
        marginTop: theme.spacing(3),
        alignItems: 'center',
        display: 'flex',
    },
    leftSpacing: {
        marginLeft: theme.spacing(1),
    },
    checkbox: {
        marginTop: theme.spacing(3),
    },
    label: {
        marginLeft: theme.spacing(3),
    },
    eyeIcon: {
        '&:hover': {
            cursor: 'pointer',
        },
    },
    signUpButton: {
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
        backgroundColor: colors.palette.primary.light,
        padding: theme.spacing(1.5, 5.5),
        marginTop: theme.spacing(3),
        textTransform: 'none',
        boxShadow: 'none',
        fontSize: '11px',
    },
    signInWith: {
        marginTop: theme.spacing(8),
        alignItems: 'center',
        display: 'flex',
    },
    signInWithButton: {
        marginLeft: theme.spacing(1),
    },
    icons: {
        marginLeft: theme.spacing(3),
        alignItems: 'center',
        display: 'flex',
    },
    iconButton: {
    },
    avatar: {
    },
    icon: {
        height: '30px',
        width: '30px',
    },
}))

export default SignUp