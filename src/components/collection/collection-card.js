import React from 'react'
import { 
    Box ,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography } from '@material-ui/core';
import { Link } from 'gatsby';
import image from '../../assets/media/collection.png'
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
                    <Link to={ `/collections/${ props.slug}` }  >
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={image}
                            title="Contemplative Reptile"
                            />
                        <CardContent>
                            <Typography>
                                <Box mb={1}  fontSize="subtitle2.fontSize"  className={ classes.date } >12 Sept 2019</Box>
                                <Box mb={1}  fontWeight={900} fontSize="h6.fontSize"  >Meetup: Time Management Skills</Box>
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">Gianmarco Ramos</Typography>
                        </CardContent>
                    </Link>
                </CardActionArea>
            </Card>
    )
}

export default CollectionCard