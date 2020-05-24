import { Button, TextField, IconButton, InputAdornment, Typography, FormControlLabel, Checkbox, createMuiTheme, makeStyles } from '@material-ui/core'
import SignInService from '../../platform/services/sign-in/SignInService'
import AccountCircle from '@material-ui/icons/AccountCircle';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Visibility from '@material-ui/icons/Visibility';
import ROUTES from '../../platform/constants/routes';
import LockIcon from '@material-ui/icons/Lock';
import { useHistory } from 'react-router-dom';
import icons from '../../resources/Images'
import Grid from '@material-ui/core/Grid'
import React, { useState } from 'react'
import AuthenticationRoute from '../../platform/services/authentication/AuthenticationService';


function SignIn(props) {

    const classes = useStyles();
    const history = useHistory();
    let [values, setValues] = useState({
        username: '',
        password: '',
        rememberMe: false,
        showPassword: false,
    });

    const signIn = () => {
        console.log(values.username);
        console.log(values.password);

        SignInService.signIn(
            values.username,
            values.password
        ).then(
            response => {
                AuthenticationRoute.logInUser(response.data)
                history.push(ROUTES.PROFILE)
            }
        )
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    const handleChange = (props) => (event) => {
        setValues({ ...values, [props]: event.target.value })
    }

    const handleChangeCheckbox = () => {
        setValues({ ...values, rememberMe: !values.rememberMe });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword })
    }


    return (
        <div className={classes.root}>
            <Grid container component='main' className={classes.baseGrid}>
                <Grid item xs={false} sm={6}></Grid>
                <Grid item xs={12} sm={6}>
                    <div className={classes.paper}>
                        <Typography component='h1' variant='h4' className={classes.signIn}>
                            Sign in
                        </Typography>
                        <form className={classes.form}>
                            <div className={classes.fields}>
                                <AccountCircle />
                                <TextField
                                    autoFocus
                                    fullWidth
                                    type="text"
                                    id='username'
                                    name='username'
                                    placeholder='Username'
                                    value={values.username}
                                    className={classes.leftSpacing}
                                    onChange={handleChange('username')}
                                />
                            </div>
                            <div className={classes.fields}>
                                <LockIcon />
                                <TextField
                                    fullWidth
                                    type={values.showPassword ? 'text' : 'password'}
                                    id='password'
                                    name='password'
                                    placeholder='Password'
                                    value={values.password}
                                    className={classes.leftSpacing}
                                    onChange={handleChange('password')}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {!values.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </div>
                            <div className={classes.checkbox}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={values.rememberMe}
                                            onChange={handleChangeCheckbox}
                                            name="rememberMe"
                                            color="primary"
                                        />
                                    }
                                    label="Remember me"
                                />
                            </div>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={signIn}
                                className={classes.signInButton}
                            >
                                Log in
                            </Button>
                        </form>
                        <div className={classes.signInWith}>
                            Or Log in with
                            <div className={classes.icons}>
                                <IconButton>
                                    <img src={icons[0]} className={classes.icon} alt='google' />
                                </IconButton>
                                <IconButton>
                                    <img src={icons[1]} className={classes.icon} alt='github' />
                                </IconButton>
                                <IconButton>
                                    <img src={icons[2]} className={classes.icon} alt='facebook' />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div >
    )

}

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('sm')]: {
            borderRadius: '12px',
            margin: theme.spacing(8, 8),
        },
    },
    baseGrid: {
        padding: theme.spacing(1),
    },
    signIn: {
        fontWeight: 'bold',
    },
    paper: {
        display: 'flex',
        alignItems: 'left',
        flexDirection: 'column',
        margin: theme.spacing(8, 4),
    },
    form: {
    },
    fields: {
        display: 'flex',
        alignItems: 'center',
        marginTop: theme.spacing(3),
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
        fontSize: '11px',
        boxShadow: 'none',
        textTransform: 'none',
        marginTop: theme.spacing(3),
        padding: theme.spacing(1.5, 5.5),
        backgroundColor: colors.palette.primary.light,
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
            backgroundColor: colors.palette.primary.main,
        },
    },
    signInWith: {
        display: 'flex',
        alignItems: 'center',
        marginTop: theme.spacing(8),
    },
    signInWithButton: {
        marginLeft: theme.spacing(1),
    },
    icons: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: theme.spacing(3),
    },
    iconButton: {
    },
    avatar: {
    },
    icon: {
        width: '35px',
        height: 'auto',
    },
}))

// class SignIn extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             usename: '',
//             password: '',
//             remember_me: false,
//             show: false
//         }

//         this.handleChange = this.handleChange.bind(this)
//         this.showPassword = this.showPassword.bind(this)
//         this.signIn = this.signIn.bind(this)
//         this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this)
//     }

//     handleChange(event) {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }

//     showPassword() {
//         if (this.state.show === true)
//             this.setState({ show: false })
//         else
//             this.setState({ show: true })
//     }

//     signIn() {
//         let signInRequest = {
//             "username": this.state.usename,
//             "password": this.state.password
//         }
//         SignInService.signIn(signInRequest).then(response => console.log(response))
//     }

//     handleMouseDownPassword = (event) => {
//         event.preventDefault();
//     };

//     render() {

//         const { classes } = this.props

//         return (
//             <div className={classes.root}>
//                 <Grid container component="main" className={classes.base_grid} spacing={0.5}>
//                     <Grid item xs={false} md={6}></Grid>
//                     <Grid item xs={12} md={6}>
//                         <div className={classes.paper}>
//                             <Typography component="h1" variant="h4" className={classes.signIn}>
//                                 Sign in
//                             </Typography>
//                             <form className={classes.form}>
//                                 <Grid container>
//                                     <Grid item xs>
//                                         <AccountCircle />
//                                     </Grid>
//                                     <Grid item>
//                                         <TextField
//                                             id="username"
//                                             name="username"
//                                             label="Username"
//                                             margin="normal"
//                                             autoFocus
//                                             fullWidth
//                                         />
//                                     </Grid>
//                                 </Grid>
//                                 <TextField
//                                     id="password"
//                                     name="password"
//                                     label="Password"
//                                     margin="normal"
//                                     type={this.state.show ? "text" : "password"}
//                                     fullWidth
//                                     InputProps={{
//                                         endAdornment: (
//                                             <InputAdornment position="end" className={classes.eyeIcon}>
//                                                 {this.state.show ?
//                                                     <VisibilityOffOutlinedIcon onClick={this.showPassword} onMouseDown={this.handleMouseDownPassword} color="primary" />
//                                                     :
//                                                     <VisibilityOutlinedIcon onClick={this.showPassword} onMouseDown={this.handleMouseDownPassword} color="primary" />}
//                                             </InputAdornment>
//                                         )
//                                     }}
//                                 />
//                                 <FormControlLabel
//                                     control={<Checkbox value="remember" color="primary" />}
//                                     label="Remember Me"
//                                 />
//                                 <Button
//                                     className={classes.submit}
//                                     variant="contained"
//                                     size="small"
//                                     onClick={this.signIn}
//                                 >Sign In</Button>
//                             </form>
//                         </div>
//                     </Grid>
//                 </Grid>
//             </div>
//         )
//     }

// render() {

//     const { classes } = this.props

//     return (
//         <Grid container className={classes.root}>
//             <div className={classes.paper}>
//                 <Avatar className={classes.avatar}>
//                     <LockOutlinedIcon />
//                 </Avatar>
//                 <Typography component="h1" variant="h5">
//                     Sign In
//                 </Typography>
//                 <form className={classes.form}>
//                     <TextField
//                         margin="normal"
//                         fullWidth
//                         id="username"
//                         name="usename"
//                         label="Username"
//                         autoFocus
//                         onChange={this.handleChange}
//                     />
//                     <TextField
//                         margin="normal"
//                         fullWidth
//                         id="password"
//                         name="password"
//                         label="Password"
//                         type={this.state.show ? "text" : "password"}
//                         onChange={this.handleChange}
//                         InputProps={{
//                             endAdornment: (
//                                 <InputAdornment position="end" className={classes.eyeIcon}>
//                                     {this.state.show ? <VisibilityOffOutlinedIcon onClick={this.showPassword} color="primary" /> : <VisibilityOutlinedIcon onClick={this.showPassword} color="primary" />}
//                                 </InputAdornment>
//                             ),
//                         }}
//                     />
//                     <Grid container className={classes.topSpacing}>
//                         <Grid item xs>
//                             <FormControlLabel
//                                 control={<Checkbox value="remember" color="primary" />}
//                                 label="Remember Me"
//                             />
//                         </Grid>
//                         <Grid item>
//                             <Button
//                                 color="primary"
//                                 variant="contained"
//                                 onClick={this.signIn}
//                             >Sign In</Button>
//                         </Grid>
//                     </Grid>
//                     <Grid container className={classes.topSpacing}>
//                         <Grid item xs>
//                             <Link href="#" variant="body2">Forgot password?</Link>
//                         </Grid>
//                         <Grid item>
//                             <Link href="#" variant="body2">
//                                 Don't have an account? Join us
//                             </Link>
//                         </Grid>
//                     </Grid>
//                     <Grid container className={classes.iconsGroup}>
//                         <Button className={classes.signInWith} variant='outlined'>
//                             <img src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' alt='google' className={classes.signInImg} />
//                             <Typography className={classes.signInText} variant='body1'>Join with Google</Typography>
//                         </Button>
//                         <Button className={classes.signInWith} variant='outlined'>
//                             <img src='https://upload.wikimedia.org/wikipedia/commons/c/c2/F_icon.svg' alt='google' className={classes.signInImg} />
//                             <Typography className={classes.signInText} variant='body1'>Join with Facebook</Typography>
//                         </Button>
//                         <Button className={classes.signInWith} variant='outlined'>
//                             <img src='https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png' alt='google' className={classes.signInImg} />
//                             <Typography className={classes.signInText} variant='body1'>Join with LinkedIn</Typography>
//                         </Button>
//                     </Grid>
//                 </form>
//             </div>
//         </Grid>
//     )
// }


const colors = createMuiTheme({
    palette: {
        primary: {
            light: '#6dabe4',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
})

// const styles = theme => ({
//     root: {
//         margin: theme.spacing(5),
//     },
//     base_grid: {
//         padding: theme.spacing(8),
//         backgroundColor: "red"
//     },
//     signIn: {
//         fontWeight: 'bold',
//     },
//     paper: {
//         margin: theme.spacing(8, 4),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'left',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.primary.main,
//     },
//     form: {
//         width: '100%s',
//         marginTop: theme.spacing(1),
//     },
//     submit: {
//         backgroundColor: colors.palette.primary.light,
//     },
//     topSpacing: {
//         marginTop: theme.spacing(2),
//         ['@media (max-width:450px)']: {
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//         },
//     },
//     iconsGroup: {
//         marginTop: theme.spacing(3),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     signInWith: {
//         [theme.breakpoints.up('xs')]: {
//             width: '250px',
//         },
//         [theme.breakpoints.down('xs')]: {
//             width: '100%',
//         },
//         margin: theme.spacing(0.75, 0, 0.75, 0),
//     },
//     signInImg: {
//         height: '25px',
//         [theme.breakpoints.up('xs')]: {
//             width: '25px',
//         },
//         [theme.breakpoints.down('xs')]: {
//             width: '10%',
//         },
//     },
//     signInText: {
//         [theme.breakpoints.up('xs')]: {
//             width: '225px',
//         },
//         [theme.breakpoints.down('xs')]: {
//         },
//         textTransform: 'none'

//     },
//     eyeIcon: {
//         '&:hover': {
//             cursor: 'pointer',
//         },
//     },
// })

// SignIn.propTypes = {
//     classes: PropTypes.object.isRequired,
// }

export default SignIn