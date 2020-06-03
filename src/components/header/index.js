import { CssBaseline, AppBar, Toolbar, Typography, Container, Box, useScrollTrigger, Slide, IconButton, Badge, makeStyles, Menu, MenuItem } from '@material-ui/core'
import AuthenticationService from '../../platform/services/authentication/AuthenticationService'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { withRouter, Link, useHistory } from 'react-router-dom'
import AccountCircle from '@material-ui/icons/AccountCircle'
import LogOut from '../../platform/services/log-out/LogOut'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import ROUTES from '../../platform/constants/routes'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import colors from '../../resources/colors'
import PropTypes from 'prop-types'
import React from 'react'

function Header(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const history = useHistory();
    const classes = useStyles();

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const logOut = () => {
        LogOut.logOut().then(
            history.push(ROUTES.SIGN_IN)
        )
    }

    const handleClose = () => {
        setAnchorEl(null);
    };


    if (
        props.history.location.pathname === ROUTES.SIGN_IN ||
        props.history.location.pathname === ROUTES.SIGN_UP
    ) {
        return <div></div>
    } else {
        return (
            <>
                <CssBaseline />
                <HideOnScroll {...props}>
                    <AppBar position='static' className={classes.appBar}>
                        <Toolbar>
                            <IconButton
                                className={classes.menuButton}
                                aria-label='open-menu'
                                onClick={handleClick}
                                aria-haspopup='true'
                                color='inherit'
                                edge='start'
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                                anchorEl={anchorEl}
                                id='open-menu'
                                keepMounted
                            >
                                <MenuItem>My Passed Quizzes</MenuItem>
                                <MenuItem>Available Quizzes</MenuItem>
                                <MenuItem>Settings</MenuItem>
                                <MenuItem>Contact Us</MenuItem>
                                <MenuItem>About Us</MenuItem>
                            </Menu>
                            <Typography variant='h6' className={classes.title}>
                                <Link to={ROUTES.HOME} className={classes.link}>Onlinq Quiz</Link>
                            </Typography>
                            <div>
                                <IconButton
                                    aria-label='show 17 new notifications'
                                    color='inherit'>
                                    <Badge badgeContent={17} color='secondary'>
                                        <NotificationsIcon />
                                    </Badge>
                                </IconButton>
                                <IconButton
                                    aria-label='account of current user'
                                    color='inherit'
                                >
                                    <AccountCircle />
                                </IconButton>
                                <IconButton
                                    aria-label='account of current user'
                                    color='inherit'
                                >
                                    <ExitToAppIcon />
                                </IconButton>
                            </div>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
            </>
        )
    }

}

const useStyles = makeStyles((theme) => ({
    root: {
    },
    appBar: {
        backgroundColor: colors.palette.primary.light,
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    link: {
        '&:hover': {
            color: colors.palette.primary.dark,

        },
        textDecoration: 'none',
    },
    title: {
        flexGrow: 1,
    },
    sectionDesktop: {
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
        display: 'none',
    },

}))

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
    return (
        <Slide appear={false} direction='down' in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

export default withRouter(Header)