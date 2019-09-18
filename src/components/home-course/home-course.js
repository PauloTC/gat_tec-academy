import React from 'react'
import { 
        Box, 
        Button,
        Paper, 
        Grid,
        Typography } from '@material-ui/core';
import Styles from './home-course.module.scss'
import { makeStyles } from '@material-ui/styles';
import { Link } from 'gatsby';

const useStyles = makeStyles({
    button: {
        textTransform: "capitalize",
        color: "#ff00a6",
        border: '1px solid rgba(255, 0, 166, 0.5)',
        '& a': {
            textDecoration: 'none',
            color:  'inherit'
        }
    },
    date: {
        color: "#ff00a6"
    },
    container: {
        width: "100%"
    }
});

const HomeCourse = (props) => {
    const classes = useStyles();
    return(
        <div  className={ classes.container }  >
            <Paper  className={ Styles.course__card }  >
                <Box  mb={3}>
                    <Typography> 
                        <Box mb={1} className={classes.date} fontSize="subtitle2.fontSize">mar., 10 sept.</Box>
                        <Box lineHeight={1.2} mb={1}  className={Styles.course__title} fontSize="h6.fontSize" fontWeight="fontWeightBold" > {props.edge.node.title} </Box>
                        <Box  fontSize="body2.fontSize" > {props.edge.node.exhibitor} </Box>
                    </Typography>
                </Box>
                <Grid  container justify="flex-end" >
                    <Button className={classes.button} size="small" variant="outlined" color="primary">
                        <Link  to={`/courses/${ props.edge.node.slug}`}  >Asistiré</Link>
                    </Button>
                </Grid>
            </Paper>
        </div>
    )
}

export default HomeCourse