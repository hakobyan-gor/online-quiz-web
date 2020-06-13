import { CssBaseline, AppBar, Toolbar, Typography, useScrollTrigger, Slide, IconButton, Badge, useTheme, makeStyles, Drawer } from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { withRouter, Link, useHistory } from 'react-router-dom'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import AccountCircle from '@material-ui/icons/AccountCircle'
import LogOut from '../../platform/services/log-out/LogOut'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import ROUTES from '../../platform/constants/routes'
import ListItem from '@material-ui/core/ListItem'
import React, { useState, Fragment } from 'react'
import Divider from '@material-ui/core/Divider'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
import colors from '../../resources/colors'
import List from '@material-ui/core/List'
import PropTypes from 'prop-types'
import clsx from 'clsx'

function Header(props) {

    const [openDrawer, setOpenDrawer] = useState(false)
    const history = useHistory()
    const classes = useStyles()
    const theme = useTheme()

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    }

    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    }

    if (
        props.history.location.pathname === ROUTES.SIGN_IN ||
        props.history.location.pathname === ROUTES.SIGN_UP
    ) {
        return <div></div>
    } else {
        return (
            <div className={classes.root}>
                <CssBaseline />
                <>
                    <AppBar
                        className={clsx(classes.appBar, {
                            [classes.appBarShift]: openDrawer,
                        })}
                        position='fixed'
                    >
                        <Toolbar>
                            <IconButton
                                className={clsx(classes.menuButton, openDrawer && classes.hide)}
                                aria-label='open-menu'
                                onClick={handleDrawerOpen}
                                aria-haspopup='true'
                                color='inherit'
                                edge='start'
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant='h6' className={classes.title}>
                                <Link to={ROUTES.HOME} className={classes.link}>Onlinq Quiz</Link>
                            </Typography>
                            <MenuItems />
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        className={classes.drawer}
                        variant="persistent"
                        open={openDrawer}
                        anchor="left"
                    >
                        <div className={classes.drawerHeader}>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            </IconButton>
                        </div>
                        <Divider />
                        <List>
                            <ListItem button key='My Passed Quizzes'>
                                <ListItemIcon><MailIcon /></ListItemIcon>
                                <ListItemText primary='My Passed Quizzes' />
                            </ListItem>
                            <ListItem button onClick={() => history.push(ROUTES.PROFILE)} key='My Profile'>
                                <ListItemIcon><MailIcon /></ListItemIcon>
                                <ListItemText primary='My Profile' />
                            </ListItem>
                            <Divider />
                            <ListItem button onClick={() => history.push(ROUTES.QUIZZES)} key='Available Quizzes'>
                                <ListItemIcon><MailIcon /></ListItemIcon>
                                <ListItemText primary='Available Quizzes' />
                            </ListItem>
                            <Divider />
                            <ListItem button key='Settings'>
                                <ListItemIcon><MailIcon /></ListItemIcon>
                                <ListItemText primary='Settings' />
                            </ListItem>
                            <ListItem button onClick={() => history.push(ROUTES.ABOUT_US)} key='About Us'>
                                <ListItemIcon><MailIcon /></ListItemIcon>
                                <ListItemText primary='About Us' />
                            </ListItem>
                            <ListItem button onClick={() => history.push(ROUTES.CONTACT_US)} key='Contact Us'>
                                <ListItemIcon><MailIcon /></ListItemIcon>
                                <ListItemText primary='Contact Us' />
                            </ListItem>
                        </List>
                    </Drawer>
                </>
                <Toolbar />
            </div>
        )
    }

}

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: colors.palette.primary.light,
        flexGrow: 1,
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    menuMoreVertIcon: {
        [theme.breakpoints.down('sm')]: {
            textDecoration: 'none',
        },
    },
    link: {
        '&:hover': {
            color: colors.palette.primary.dark,

        },
        textDecoration: 'none',
    },
    title: {
        [theme.breakpoints.down(300)]: {
            display: 'none'
        },
        flexGrow: 1,
    },
    sectionDesktop: {
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
        display: 'none',
    },

    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        padding: theme.spacing(0, 1),
        justifyContent: 'flex-end',
        ...theme.mixins.toolbar,
        alignItems: 'center',
        display: 'flex',
    },
}))

const MenuItems = () => {

    const logOut = () => {
        LogOut.logOut().then(
            history.push(ROUTES.SIGN_IN)
        )
    }

    return (
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
                onClick={logOut}
                color='inherit'
            >
                <ExitToAppIcon />
            </IconButton>
        </div>
    )
}

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