import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import { maxWidth } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
    position: {
        borderBottom: '1px solid #321063',
        backgroundColor: '#321063',
        paddingBottom: 5,
        color: 'white',
        borderRadius: 10,
        margin: 0,
        paddingBottom: 0,
        textAlign: 'center',
        maxWidth: 'max-content',
        display: 'flex',
        padding: '0 10px'
    },
    content: {
        marginTop: 10,
        marginBottom: 10,
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
		},
    },
    image: {
        borderRadius: 10
    }
}));

const PointsGroup = (props) => {
    const classes = useStyles();
    return (
        <Grid item xs={6} sm={12}  >
                {(() => {
                    if ( props.position === 0  ) {
                        return (
                            <Typography  className={classes.position}  variant="subtitle2" > 1er puesto  <span  role="img" >🎉</span>  </Typography>    
                        )
                    } else if ( props.position === 1 ) {
                        return (
                            <Typography  className={classes.position} variant="subtitle2" > 2do puesto </Typography>    
                        )
                    } else if ( props.position === 2 ) {
                        return (
                            <Typography   className={classes.position}  variant="subtitle2" > 3er puesto </Typography>    
                        )
                    } else if ( props.position === 3 ) {
                        return (
                            <Typography   className={classes.position}  variant="subtitle2" > 4to puesto </Typography>    
                        )
                    } else {
                        return (
                            <Typography alignItems="center" gutterBottom className={classes.position} variant="subtitle2" > 5to puesto </Typography>    
                        )
                    }
                })()}
            
            <Grid container alignItems="center"  spacing={1} className={classes.content} >
                <Grid item >
                    <img className={classes.image}  src={props.image}  height="60" alt="" />
                </Grid>
                <Grid  item  >
                    <Typography  variant="subtitle2"> 
                        <Box  fontWeight={700} >Team {props.name}</Box>    
                    </Typography>
                    <Typography variant="caption" display="block" > {props.points} pts </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default PointsGroup