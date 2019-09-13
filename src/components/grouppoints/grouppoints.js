import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Styles from './grouppoints.module.scss'

const PointsGroup = (props) => {    
    return (
        <React.Fragment>
                {(() => {
                    if ( props.position === "0"  ) {
                        return (
                            <Typography className={Styles.group__position} variant="caption" > 1er puesto  <span  role="img" >🎉</span>  </Typography>    
                        )
                    } else if ( props.position === "1" ) {
                        return (
                            <Typography className={Styles.group__position} variant="caption" > 2do puesto </Typography>    
                        )
                    } else if ( props.position === "2" ) {
                        return (
                            <Typography  variant="caption" > 3er puesto </Typography>    
                        )
                    } else if ( props.position === "3" ) {
                        return (
                            <Typography  variant="caption" > 4to puesto </Typography>    
                        )
                    } else {
                        return (
                            <Typography  variant="caption" > 5to puesto </Typography>    
                        )
                    }
                })()}
            
            <Grid container  spacing={2} className={Styles.group__content} >
                <Grid item >
                    <img className={Styles.group__image}  src={props.image}  height="60" alt="" />
                </Grid>
                <Grid  item className={Styles.group__text}  >
                    <Typography className={Styles.group__subtitle} variant="subtitle2"> Team {props.name} </Typography>
                    <Typography variant="caption" display="block" > {props.points} pts </Typography>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default PointsGroup