import React, {  Fragment } from 'react'
import { Typography, Box, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    buttonctn: {
        [theme.breakpoints.down('sm')]: {
            alignSelf: "flex-end",
            marginTop: 10
        },
    },
	button: {
		textTransform: 'capitalize',
		fontSize: '16px',
        fontWeight: 900,
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 30,
        [theme.breakpoints.down('sm')]: {
            flexDirection: "column",
            marginBottom: 10
		},
    },
    text: {
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down('sm')]: {
			width: '100% !important'
		},
    }
  }));


const SubHeader = (props) => {
	const classes = useStyles();
    return(
        <Fragment>
            <Typography>
                <div  className={ classes.container }  >
                    <div  className={classes.text} >
                        <Box fontWeight={900} fontSize="h6.fontSize" > {  props.title } </Box>
                        <Box fontSize="body2.fontSize" > {  props.subtitle } </Box>
                    </div>
                    <div  className={classes.buttonctn} >
                        <Button fontWeight={900} className={classes.button}  color="secondary"> { props.button } </Button>
                    </div>
                </div>
            </Typography>
        </Fragment>
    )
}

export default SubHeader