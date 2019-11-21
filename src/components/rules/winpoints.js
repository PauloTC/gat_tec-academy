import React from "react"
import { 
    Grid, 
    Typography,
    Container,
    Paper,
    Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme =>({
    text : {
        display: 'flex'
    },
    paper: {
        padding: 15,
        boxShadow: "1px 1px 16px 0 rgba(50, 16, 99, 0.1)"
    },
    points: {
        width: 35
    },
    icon :{
        marginRight: 35,
        marginTop: 3,
        marginLeft: 2, 
        fontStyle: 'normal'
    },
    description: {
        maxWidth: 300
    },
    individual: {
        [theme.breakpoints.down('md')]: {
            marginBottom: 20,
            width: '100%'
		},
    }
}));

const data = [
    {
        title: 'Puntaje individual:',
        points : [
            {
                number : "+1",
                task: "Por asistencia al curso/taller"
            },
            {
                number : "+1",
                task: "Por participación en el curso/taller"
            },
            {
                number : "+1",
                task: "Por ganar el Kahoot en el curso"
            },
            {
                number : "-1",
                task: "Por no asistir o no cancelar a tiempo"
            }
        ]
    },
    {
        title: 'Puntaje grupal:',
        points: [
            {
                number: "+1",
                task: 'Por mayor asistencia del grupo al curso/taller'
            },
            {
                number: "+1",
                task: 'Por iniciativa/emprendimiento a partir  de lo aprendido en los cursos que ayude a Belcorp'
            }
        ]
    }
]


const WinPoints = () => {
    const classes = useStyles();
    return (
        <Box  py={7} mb={3} className={ classes.container } >
            <Container maxWidth="lg" >
                <Typography variant="h5" >
                    <Box mb={7} fontWeight={900} > ¿Cómo ganar puntos? </Box>  
                </Typography>
                <Grid ml={5} container  justify="space-around" >
                    <Grid item sm={12} md={5}  className={ classes.individual } >
                        <Paper className={ classes.paper }  >
                            <Typography className={ classes.text }>
                                <i  className={classes.icon} >👩🏽‍💻</i>
                                <Box  fontSize='h6.fontSize'  mb={1} fontWeight={900} >{ data[0].title }</Box>
                            </Typography>
                            {
                                data[0].points.map( (point, index)  => {
                                    return(
                                        <Typography  className={ classes.text }  >
                                                <Box  className={ classes.points }  mr={3} fontWeight={900} >  { point.number }</Box> 
                                                <Box mb={1} >{ point.task }</Box> 
                                        </Typography>
                                    )
                                } )
                            }
                        </Paper>
                    </Grid>
                    <Grid item sm={12} md={5} >
                        <Paper className={ classes.paper }>
                            <Typography className={ classes.text } >
                                <i  className={classes.icon} >👫</i>
                                <Box fontSize='h6.fontSize'  mb={1} fontWeight={900}  >{ data[1].title }</Box>    
                            </Typography>
                            {
                                data[1].points.map( (point, index)  => {
                                    return(
                                        <Typography className={ classes.text } >
                                                <Box  className={ classes.points }   mr={3} fontWeight={900} >  { point.number }</Box> 
                                                <Box  className={ classes.description } mb={1} >{ point.task }</Box> 
                                        </Typography>
                                    )
                                } )
                            }
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default WinPoints