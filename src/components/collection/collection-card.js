import React from 'react'
import { 
    Box ,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography } from '@material-ui/core';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    date: {
        color: '#ff00a6'
    }
}))

const CollectionCard = (props) => {
	const classes = useStyles();
    return (
            <Card>
                <CardActionArea>
                    <Link to={ `/collections/${ props.data.slug}` }  >
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image= { props.data.image.file.url }
                            title="Contemplative Reptile"
                            />
                        <CardContent>
                            <Typography>
                                <Box mb={1}  fontSize="subtitle2.fontSize"  className={ classes.date } >  { props.data.fecha1 }  </Box>
                                <Box mb={1}  fontWeight={900} fontSize="h6.fontSize"  > {  props.data.title } </Box>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p"> { props.data.exhibitor } </Typography>
                        </CardContent>
                    </Link>
                </CardActionArea>
            </Card>
    )
}

export default CollectionCard