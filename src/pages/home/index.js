import { makeStyles, Grid } from '@material-ui/core'
import Quiz from '../../components/quiz'
import React from 'react'

function Home() {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container component='main' className={classes.baseGrid}>
                <Quiz />
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

export default Home