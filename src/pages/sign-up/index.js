import React, { useState, Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { Button, TextField, InputAdornment, makeStyles, Avatar, Typography, withStyles } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import VisibilityOffOutlinedIcon from '@material-ui/icons/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import PropTypes from 'prop-types';

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

class SignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            eMail: '',
            firstName: '',
            lastName: '',
            password: '',
            showPassword: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.showPassword = this.showPassword.bind(this)
        this.signUp = this.signUp.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value 
        })
    }

    showPassword() {
        if (this.state.showPassword === true)
            this.setState({ showPassword: false })
        else
            this.setState({ showPassword: true })
    }

    signUp() {

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
                        Sign Up
                    </Typography>
                    <form className={classes.form}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="eMail"
                            name="eMail"
                            label="Email"
                            type="email"
                            autoFocus
                            onChange={this.handleChange}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="firstName"
                            name="firstName"
                            label="First Name"
                            onChange={this.handleChange}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="lastName"
                            name="lastName"
                            label="Last Name"
                            onChange={this.handleChange}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type={this.state.showPassword ? "text" : "password"}
                            onChange={this.handleChange}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end" className={classes.eyeIcon}>
                                        {this.state.showPassword ? <VisibilityOffOutlinedIcon onClick={this.showPassword} color="primary" /> : <VisibilityOutlinedIcon onClick={this.showPassword} color="primary" />}
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button
                            color="primary"
                            variant="contained"
                            className={classes.button}
                        >Sign Up</Button>
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
    topSpacing: {
        marginTop: theme.spacing(2)
    },
    buttonGroup: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(4)
    },
    eyeIcon: {
        '&:hover': {
            cursor: 'pointer',
        },
    },
    button: {
        marginTop: theme.spacing(3),
        float: 'right',
    },
})

SignUp.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SignUp)