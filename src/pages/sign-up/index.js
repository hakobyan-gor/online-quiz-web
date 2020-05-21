import React, { useState, Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { Button, TextField, IconButton, InputAdornment, Typography, FormControlLabel, Checkbox, createMuiTheme, makeStyles, Avatar, } from '@material-ui/core'
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Email from '@material-ui/icons/Email';

function SignUp() {

    const classes = useStyles()
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        password: '',
        eMail: '',
    })

    const handleMouseDownPassword = (event) => {
        event.preventDefault()
    }

    const handleChange = (props) => (event) => {
        setValues({ ...values, [props]: event.target.value })
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword })
    }

    const signUp = () => {

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
                                    autoFocus
                                    fullWidth
                                    type="text"
                                    id='firstName'
                                    name='firstName'
                                    placeholder='First Name'
                                    value={values.firstName}
                                    className={classes.leftSpacing}
                                    onChange={handleChange('firstName')}
                                />
                                <TextField
                                    fullWidth
                                    type="text"
                                    id='lastName'
                                    name='lastName'
                                    placeholder='Last Name'
                                    value={values.lastName}
                                    className={classes.leftSpacing}
                                    onChange={handleChange('lastName')}
                                />
                            </div>
                            <div className={classes.fields}>
                                <Email />
                                <TextField
                                    fullWidth
                                    id='eMail'
                                    name='eMail'
                                    type='email'
                                    placeholder='Your Email'
                                    value={values.eMail}
                                    className={classes.leftSpacing}
                                    onChange={handleChange('eMail')}
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
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.signUpButton}
                                onClick={signUp}
                            >
                                Register
                            </Button>
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
    signUpButton: {
        fontSize: '11px',
        boxShadow: 'none',
        textTransform: 'none',
        marginTop: theme.spacing(3),
        padding: theme.spacing(1.5, 5.5),
        backgroundColor: colors.palette.primary.light,
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
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
        width: '30px',
        height: '30px',
    },
}))

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

// export default function SignUp() {

//     let [username, setUsername] = useState('')
//     let [password, setPassword] = useState('')
//     let [eMail, setEmail] = useState('')
//     let [show, setShow] = useState(false)

//     const handleUsernameChange = (event) => {
//         setUsername(event.target.value)
//     }

//     const handlePasswordChange = (event) => {
//         setPassword(event.target.value)
//     }

//     const handleEmailChange = (event) => {
//         setEmail(event.target.value)
//     }

//     const showPassword = () => {
//         if (show === true)
//             setShow(false)
//         else
//             setShow(true)
//     }

//     const useStyles = makeStyles((theme) => ({
//         root: {
//         },
//         paper: {
//             margin: theme.spacing(8, 4),
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//         },
//         avatar: {
//             margin: theme.spacing(1),
//             backgroundColor: theme.palette.primary.main,
//         },
//         form: {
//             width: "100%",
//             marginTop: theme.spacing(1),
//         },
//         topSpacing: {
//             marginTop: theme.spacing(2)
//         },
//         buttonGroup: {
//             marginTop: theme.spacing(2),
//             marginRight: theme.spacing(4)
//         },
//         eyeIcon: {
//             '&:hover': {
//                 cursor: 'pointer',
//             },
//         },
//         button: {
//             marginTop: theme.spacing(3),
//             float: 'right',
//         },
//     }))

//     const classes = useStyles();

//     return (
//         <Grid container className={classes.root}>
//             <div className={classes.paper}>
//                 <Avatar className={classes.avatar}>
//                     <LockOutlinedIcon />
//                 </Avatar>
//                 <Typography component="h1" variant="h5">
//                     Sign Up
//                     </Typography>
//                 <form className={classes.form}>
//                     <TextField
//                         margin="normal"
//                         fullWidth
//                         id="eMail"
//                         name="eMail"
//                         label="Email"
//                         type="email"
//                         autoFocus
//                         onChange={handleEmailChange}
//                     />
//                     <TextField
//                         margin="normal"
//                         fullWidth
//                         id="firstName"
//                         name="firstName"
//                         label="First Name"
//                         onChange={handleUsernameChange}
//                     />
//                     <TextField
//                         margin="normal"
//                         fullWidth
//                         id="lastName"
//                         name="lastName"
//                         label="Lastname"
//                         onChange={handleUsernameChange}
//                     />
//                     <TextField
//                         margin="normal"
//                         fullWidth
//                         id="password"
//                         name="password"
//                         label="Password"
//                         type={show ? "text" : "password"}
//                         onChange={handlePasswordChange}
//                         InputProps={{
//                             endAdornment: (
//                                 <InputAdornment position="end" className={classes.eyeIcon}>
//                                     {show ? <VisibilityOffOutlinedIcon onClick={showPassword} color="primary" /> : <VisibilityOutlinedIcon onClick={showPassword} color="primary" />}
//                                 </InputAdornment>
//                             ),
//                         }}
//                     />
//                     <Button
//                         type="submit"
//                         color="primary"
//                         variant="contained"
//                         className={classes.button}
//                     >Sign Up</Button>
//                 </form>
//             </div>
//         </Grid>
//     )

// }

// class SignUp extends Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             eMail: '',
//             firstName: '',
//             lastName: '',
//             password: '',
//             showPassword: false
//         }

//         this.handleChange = this.handleChange.bind(this)
//         this.showPassword = this.showPassword.bind(this)
//         this.signUp = this.signUp.bind(this)
//     }

//     handleChange(event) {
//         this.setState({
//             [event.target.name]: event.target.value 
//         })
//     }

//     showPassword() {
//         if (this.state.showPassword === true)
//             this.setState({ showPassword: false })
//         else
//             this.setState({ showPassword: true })
//     }

//     signUp() {

//     }

//     render() {

//         const { classes } = this.props

//         return (
//             <Grid container className={classes.root}>
//                 <div className={classes.paper}>
//                     <Avatar className={classes.avatar}>
//                         <LockOutlinedIcon />
//                     </Avatar>
//                     <Typography component="h1" variant="h5">
//                         Sign Up
//                     </Typography>
//                     <form className={classes.form}>
//                         <TextField
//                             margin="normal"
//                             fullWidth
//                             id="eMail"
//                             name="eMail"
//                             label="Email"
//                             type="email"
//                             autoFocus
//                             onChange={this.handleChange}
//                         />
//                         <TextField
//                             margin="normal"
//                             fullWidth
//                             id="firstName"
//                             name="firstName"
//                             label="First Name"
//                             onChange={this.handleChange}
//                         />
//                         <TextField
//                             margin="normal"
//                             fullWidth
//                             id="lastName"
//                             name="lastName"
//                             label="Last Name"
//                             onChange={this.handleChange}
//                         />
//                         <TextField
//                             margin="normal"
//                             fullWidth
//                             id="password"
//                             name="password"
//                             label="Password"
//                             type={this.state.showPassword ? "text" : "password"}
//                             onChange={this.handleChange}
//                             InputProps={{
//                                 endAdornment: (
//                                     <InputAdornment position="end" className={classes.eyeIcon}>
//                                         {this.state.showPassword ? <VisibilityOffOutlinedIcon onClick={this.showPassword} color="primary" /> : <VisibilityOutlinedIcon onClick={this.showPassword} color="primary" />}
//                                     </InputAdornment>
//                                 ),
//                             }}
//                         />
//                         <Button
//                             color="primary"
//                             variant="contained"
//                             className={classes.button}
//                         >Sign Up</Button>
//                     </form>
//                 </div>
//             </Grid>
//         )
//     }

// }

// const styles = theme => ({
//     root: {
//     },
//     paper: {
//         margin: theme.spacing(8, 4),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.primary.main,
//     },
//     form: {
//         width: "100%",
//         marginTop: theme.spacing(1),
//     },
//     topSpacing: {
//         marginTop: theme.spacing(2)
//     },
//     buttonGroup: {
//         marginTop: theme.spacing(2),
//         marginRight: theme.spacing(4)
//     },
//     eyeIcon: {
//         '&:hover': {
//             cursor: 'pointer',
//         },
//     },
//     button: {
//         marginTop: theme.spacing(3),
//         float: 'right',
//     },
// })

// SignUp.propTypes = {
//     classes: PropTypes.object.isRequired,
// }

// export default withStyles(styles)(SignUp)

export default SignUp