import { makeStyles } from "@material-ui/core"
import React, { useState } from "react"
import images from '../../../../resources/Images'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function QuizCategoryCard(props) {

    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardActionArea onClick={() => props.handleClick(props.id)}>
                <CardMedia
                    image={images[0]}
                    title={props.category}
                    className={classes.media}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.category}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(3, 3),
        maxWidth: 345,
        minWidth: 345,
    },
    media: {
        height: 140,
    },

}))

export default QuizCategoryCard