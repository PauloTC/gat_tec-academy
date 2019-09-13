import React, { Fragment } from 'react'
import { 
    Box, 
    Button,
    Paper, 
    Grid } from '@material-ui/core';
import { makeStyles, styled } from '@material-ui/styles';
import { green } from '@material-ui/core/colors';
import { borderRadius, height, width } from '@material-ui/system';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    text: {
        borderRadius: 8,
        boxShadow: '1px 1px 16px 0 rgba(50, 16, 99, 0.1)',
        height: 100,
        color: 'white',
        '& div' :  {
            fontSize: '16px !important',
            fontWeight: 400
        }
    },
    item: {
        '&:nth-of-type(5)' : {
            boxShadow:'none',
            position: 'absolute',
            right: '-8px',
            '& div' : {
                color : 'black !important', 
                background: 'transparent !important',
                
            },
            '& p' :  {
                display: 'flex  !important',
                paddingTop: '30px'
            }
        },
        '&:nth-of-type(4)' : {
            '& div' :  {
                fontSize: '16px !important',
                fontWeight: 400,
                background: 'white !important',
                color:  'black !important'
            },
            '& p' :  {
                display: 'flex  !important',
                paddingBottom: '30px'
            }
        }
    },
    "@global": {
        ".Facebook": {
            background: '#475993'
        },
        ".Apple" : {
            background : '#5e5e5e'
        },
        ".Tesla" : {
            background : '#e4404a'
        },
        ".Google" : {
            background : '#f6be00'
        },
        ".Netflix" : {
            background: '#e4404a'
        }
      }
});

const GroupCard = (props) => {
    const classes = useStyles();
    return (
        <Fragment>
            <Grid  
                container  
                justify="center"  
                alignContent="center"
                className={ classes.item }
                item 
                xs={6} 
                sm={4}
                md={3} >
                <Grid className={   `${classes.text}  ${props.data.name}` }   container   justify="center" alignItems="center"  direction="column"  >
                    <Typography >
                        <Box fontSize="body1.fontSize" fontWeight="fontWeightBold" >Team {  props.data.name }  </Box> 
                        <Box fontSize="body2.fontSize" >Team {  props.data.points }  </Box> 
                    </Typography>
                </Grid>
                {/* <Box  className={ classes.winner }> 1er Puesto </Box>  */}
            </Grid>
        </Fragment>
    )
}

export default GroupCard