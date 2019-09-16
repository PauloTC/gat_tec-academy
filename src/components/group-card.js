import React, { Fragment } from 'react'
import { 
    Box,
    Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    text: {
        borderRadius: 8,
        boxShadow: '1px 1px 16px 0 rgba(50, 16, 99, 0.1)',
        height: 80,
        color: 'white',
        '& div' :  {
            fontSize: '16px !important',
        }
    },
    icon: {
        fontSize : 30
    },
    icon35: {
        fontSize: 35
    },
    item: {
        '&:nth-of-type(5)' : {
            boxShadow:'none',
            position: 'absolute',
            right: '-8px',
            '& div' : {
                color : 'black !important', 
                background: 'transparent !important',
                fontWeight: 400,
                display: 'flex',
                padding: 0 
            },
            '& p' :  {
                display: 'flex  !important',
                paddingTop: '30px'
            },
            '& i' : { 
                display: 'none'
            },
            'name' : {
                marginRight: 10
            }
        },
        '&:nth-of-type(4)' : {
            '& div' :  {
                fontSize: '16px !important',
                fontWeight: 400,
                background: 'white !important',
                color:  'black !important',
                display: 'flex',
                padding: 0
            },
            '& p' :  {
                display: 'flex  !important',
                paddingBottom: '30px'
            },
            '& i' : { 
                display: 'none'
            }
        }
    },
    "@global": {
        ".Facebook": {
            background: '#475993',
            "&:before" : {
                content: ''
            }
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
                        <Grid spacing={2} container alignItems="center"   >
                            <Grid item >
                                    {
                                        (()=> {
                                            if( props.data.name === "Facebook"  ) {
                                                return (
                                                    <i  className={`icon-facebook-copy-4  ${classes.icon} `} ></i>
                                                )
                                            } else if ( props.data.name === "Apple"  )  {
                                                return (
                                                    <i  className={`icon-apple-copy-2 ${classes.icon}` } ></i>
                                                )
                                            } else if ( props.data.name === "Tesla"  )  {
                                                return (
                                                    <i  className={  `icon-tesla-copy-2 ${classes.icon35}`} ></i>
                                                )
                                            } else if ( props.data.name === "Google"  )  {
                                                return (
                                                    <i  className="icon-google-plus-copy-3" ></i>
                                                )
                                            } else {
                                                return (
                                                    <i  className="icon-netflix-copy-4" ></i>
                                                )
                                            }
                                        })()
                                    }
                            </Grid>
                            <Grid   item >
                                <Box className={ classes.name } fontSize="body1.fontSize" fontWeight="fontWeightBold" > Team {  props.data.name }  </Box> 
                                <Box fontSize="body2.fontSize" > {  props.data.points }  puntos</Box> 
                            </Grid>
                        </Grid>
                    </Typography>
                </Grid>
                {/* <Box  className={ classes.winner }> 1er Puesto </Box>  */}
            </Grid>
        </Fragment>
    )
}

export default GroupCard