import QuizService from '../../platform/services/quiz/QuizService'
import QuizCategoryCard from '../quiz/category/card/index'
import { makeStyles, Grid } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import QuizCard from '../quiz/card/index'

function Quiz() {

    const [quizRootCategories, setQuizRootCategories] = useState([])
    const [quizzes, setQuizzes] = useState([])
    const history = useHistory();
    const classes = useStyles();

    useEffect(
        () => {
            QuizService.getQuizzesByCategoryId(1).then(
                response => {
                    setQuizRootCategories(response.data.data)
                }
            )
        }, []
    )

    const handleClick = (id) => {
        console.log(id)
        // QuizService.getQuizzesByCategoryId(id).then(
        //     response => {
        //         history.pushState('quizzes/category' + id)
        //         // if (response.data.message === 'Quizzes') {
        //         //     setQuizzes(response.data.data)
        //         // } else {
        //         //     if (response.data.data.length !== 0) {
        //         //         setQuizRootCategories(response.data.data)
        //         //     }
        //         // }
        //     }
        // ).catch(
        //     error => {
        //     }
        // )
    }

    return (
        <div className={classes.root}>
            <Grid container component='main' className={classes.baseGrid} justify='center'>
                {
                    quizzes.map(item => (
                        <div className={classes.cardList} key={item.id}>
                            <QuizCard
                                id={item.id}
                                key={item.id}
                                name={item.name}
                                className={classes.quiz}
                                description={item.description}
                                handleClick={() => handleClick(item.id)}
                            />
                        </div>
                    ))}
                {
                    quizRootCategories.map(item => (
                        <div className={classes.cardList} key={item.id}>
                            <QuizCategoryCard
                                id={item.id}
                                key={item.id}
                                category={item.category}
                                className={classes.quiz}
                                description={item.description}
                                handleClick={() => handleClick(item.id)}
                            />
                        </div>
                    ))
                }
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