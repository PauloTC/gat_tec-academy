import React, {  Fragment } from 'react'
import { 
                    Typography, 
                    Box,
                    Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'gatsby';


const useStyles =  makeStyles(theme => ({
	image: {
		margin: 0
	},
    button: {
        textTransform: "capitalize"
    },
    card: {
        height: 305,
        backgroundSize: 'contain'
    },
    flexible: {
        display: 'flex',
        alignItems: 'flex-end',
        padding: 15
    },
    text: {
        width: "70%",
    },
    btncontainer: {
        width: "30%",
        display: "flex",
        justifyContent: "flex-end",
        alignContent: "flex-end"
    },
    image: {
        [theme.breakpoints.down('md')]: {
            width: 'auto',
            height: "auto",
            maxWidth: "100%"
        }
    }
}));


const ActivityItem = (props) => {
    const classes = useStyles();
    return (
        <Fragment>
                <div  className={ classes.container }  >
                    <img className={ classes.image }   width={430}  src={ props.data.image.file.url } />
                    {/* <CardMedia className={classes.card}    image="" /> */}
                    <div  className={ classes.flexible  } >
                        <Typography className={ classes.text  } > 
                            <Box mb={1}  fontSize="subtitle2.fontSize">{ props.data.fecha1 }</Box>
                            {/* <Box lineHeight={1.2}    fontSize="h6.fontSize" fontWeight="fontWeightBold" > { props.data.type } :</Box> */}
                            <Box lineHeight={1.2} mb={1}   fontSize="h6.fontSize" fontWeight="fontWeightBold" > { props.data.title } </Box>
                            <Box  fontSize="body2.fontSize" > { props.data.exhibitor }</Box>
                        </Typography>
                        <Box className={ classes.btncontainer  }  >
                            <Button className={classes.button} size="medium" variant="outlined" color="secondary"> 
                                <Link to={`/courses/${ props.data.slug}`} >Unirme</Link>   </Button>
                        </Box>
                    </div>
                </div>
        </Fragment>
    )
}

export default ActivityItem