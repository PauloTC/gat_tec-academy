import React, {  Fragment } from 'react'
import { Typography, Box, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
	button: {
		textTransform: 'capitalize',
		fontSize: '16px',
		fontWeight: 900
	}
  });


const SubHeader = (props) => {
	const classes = useStyles();
    return(
        <Fragment>
            <Typography>
                <Grid  container justify="space-between" >
                    <Grid  container item direction="column"   md={10} >
                        <Box fontWeight={900} fontSize="h6.fontSize" > {  props.title } </Box>
                        <Box fontSize="body2.fontSize" > {  props.subtitle } </Box>
                    </Grid>
                    <Grid container alignItems="center" justify="flex-end"  item md={2} >
                        <Button fontWeight={900} className={classes.button}  color="primary"> { props.button } </Button>
                    </Grid>
                </Grid>
            </Typography>
        </Fragment>
    )
}

export default SubHeader