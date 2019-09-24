import React, { Fragment } from 'react'
import { 
    Box,
    Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    text: {
        borderRadius: 8,
        boxShadow: '1px 1px 16px 0 rgba(50, 16, 99, 0.1)',
        width: '100%',
        color: 'white',
        marginRight: 10,
        '&:nth-of-type(5)' :  {
            marginRight: 0
        },
        '& div' :  {
            textAlign: 'center'
        },
        [theme.breakpoints.down('xs')]: {
            margin: "2%",
            marginBottom: 15
		},
    },
    textcontainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        flexDirection: 'column',
        padding: 15,
        '& div' :  {
            display: 'flex',
            flexDirection: 'column'
        }
    },
    icon: {
        fontSize : 30,
        marginBottom: 10
    },
    icon35: {
        fontSize: 35,
        marginBottom: 10
    },
    "@global": {
        "a": {
            textDecoration: 'none',
            color: 'inherit'
        },
        "body" : {
            "background-color": "#fff !important"
        },
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
}));

const GroupCard = (props) => {
    const classes = useStyles();
    return (
        <Fragment>
                <div className={   `${classes.text}  ${props.data.name}` }   >
                    <Typography alignItems="center" className={ classes.textcontainer }  >
                            <div>
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
                                                    <i  className={`icon-google-plus-copy-3 ${classes.icon}`} ></i>
                                                )
                                            } else {
                                                return (
                                                    <i  className= { `  icon-netflix-copy-4 ${classes.icon}   `  }  ></i>
                                                )
                                            }
                                        })()
                                    }
                            </div>
                            <Grid   item >
                                <Box className={ classes.name } fontSize="body1.fontSize" fontWeight="fontWeightBold" > Team {  props.data.name }  </Box> 
                                <Box fontSize="body2.fontSize" > {  props.data.points }  puntos</Box> 
                            </Grid>
                    </Typography>
                {/* <Box  className={ classes.winner }> 1er Puesto </Box>  */}
            </div>
        </Fragment>
    )
}

export default GroupCard