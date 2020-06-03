import { Button, TextField, IconButton, InputAdornment, Typography, FormControlLabel, Checkbox, createMuiTheme, makeStyles } from '@material-ui/core'
import AuthenticationService from '../../platform/services/authentication/AuthenticationService'
import SignInService from '../../platform/services/sign-in/SignInService'
import AccountCircle from '@material-ui/icons/AccountCircle'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import Visibility from '@material-ui/icons/Visibility'
import ROUTES from '../../platform/constants/routes'
import LockIcon from '@material-ui/icons/Lock'
import { useHistory } from 'react-router-dom'
import colors from '../../resources/colors'
import icons from '../../resources/Images'
import Grid from '@material-ui/core/Grid'
import React, { useState } from 'react'

function SignIn(props) {

    const history = useHistory();
    const classes = useStyles();

    let [values, setValues] = useState({
        showPassword: false,
        rememberMe: false,
        username: '',
        password: '',
    });

    const signIn = () => {
        SignInService.signIn(
            values.username,
            values.password
        ).then(
            response => {
                AuthenticationService.logInUser(response.data)
                history.push(ROUTES.HOME)
            }
        )
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword })
    }

    const handleChangeCheckbox = () => {
        setValues({ ...values, rememberMe: !values.rememberMe });
    };

    const handleChange = (props) => (event) => {
        setValues({ ...values, [props]: event.target.value })
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    return (
        <div className={classes.root}>
            <Grid container component='main' className={classes.baseGrid}>
                <Grid item sm={false} sm={2} md={6}></Grid>
                <Grid item sm={12} sm={8} md={6}>
                    <div className={classes.paper}>
                        <Typography component='h1' variant='h4' className={classes.signIn}>
                            Sign in
                        </Typography>
                        <form className={classes.form}>
                            <div className={classes.fields}>
                                <AccountCircle />
                                <TextField
                                    onChange={handleChange('username')}
                                    className={classes.leftSpacing}
                                    placeholder='Username/Email'
                                    value={values.username}
                                    name='username'
                                    id='username'
                                    type='text'
                                    autoFocus
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
                                                    onMouseDown={handleMouseDownPassword}
                                                    onClick={handleClickShowPassword}
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
                            <div className={classes.checkbox}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            onChange={handleChangeCheckbox}
                                            checked={values.rememberMe}
                                            name='rememberMe'
                                            color='primary'
                                        />
                                    }
                                    label='Remember me'
                                />
                            </div>
                            <Button
                                className={classes.signInButton}
                                variant='contained'
                                onClick={signIn}
                                color='primary'
                            >
                                Log in
                            </Button>
                        </form>
                        <div className={classes.signInWith}>
                            Or Log in with
                            <div className={classes.icons}>
                                <IconButton>
                                    <img src={icons[2]} className={classes.icon} alt='facebook' />
                                </IconButton>
                                <IconButton>
                                    <img src={icons[0]} className={classes.icon} alt='google' />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </Grid>
                <Grid item sm={false} sm={2} md={false}></Grid>
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
    signInButton: {
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
            backgroundColor: colors.palette.primary.main,
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
        height: 'auto',
        width: '30px',
    },
}))

export default SignIn