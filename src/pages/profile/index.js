import { makeStyles, Grid } from '@material-ui/core'
import React from 'react'

function Profile() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container component='main' className={classes.baseGrid}>
                MY PROFILE
            </Grid>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
    },
    baseGrid: {
    },
}))

export default Profile