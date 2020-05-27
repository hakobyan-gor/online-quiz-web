import React, { useState, useEffect } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import QuizService from "../../platform/services/quiz/QuizService";
import QuizCard from './card/index'

function Quiz() {

    const [quizRootCategories, setQuizRootCategories] = useState([])
    const [quizzes, setQuizzes] = useState([])
    const classes = useStyles();

    useEffect(
        () => {
            QuizService.getQuizRootCategories().then(
                response => {
                    setQuizRootCategories(response.data.data)
                }
            )
        }, []
    )

    const handleClick = (id) => {
        QuizService.getQuizzesByCategoryId(id).then(
            response => {
                setQuizzes(response.data.data)
                console.log(response.data.data);
            }
        ).catch(
            error => {
                console.log('ERROOOOOOOOOOOOOOOOOOOOR');
            }
        )

        
        for (let index = 0; index < quizzes.length; index++) {
            console.log(quizzes[index]);
        }
    }

    // if (quizzes !== null || quizzes !== [] ) {
    //     return(
    //         <div>
    //             HAMBAL
    //             {quizzes}
    //         </div>
    //     )
    // }
    return (
        <div className={classes.root}>
            <Grid container component='main' className={classes.baseGrid} justify="center">
                {quizRootCategories.map(item => (
                    <div className={classes.cardList} key={item.id}>
                        <QuizCard
                            id={item.id}
                            key={item.id}
                            category={item.category}
                            className={classes.quiz}
                            description={item.description}
                            handleClick={() => handleClick(item.id)}
                        />
                    </div>
                ))}
            </Grid>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {

    },
    baseGrid: {
    },
    cardList: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    quiz: {
    }
}))

export default Quiz