import React from 'react'
import { 
        Container, 
        Box, 
        Button, 
        Grid,
        Typography } from '@material-ui/core';
import Styles from './home-banner.module.scss'


const HomeBanner = (props) => {
    return(

        <Grid container>
            <img className={Styles.banner__image} src={ props.image }   />
                <Container  className={Styles.banner__container} maxWidth="lg" >
                    <Grid item xs={4} >
                        <Typography >
                            <Box gutterBottom mb={3} className={Styles.banner__text}  position="relative" fontSize="h4.fontSize" fontWeight={900} >  {props.title} 🚀 </Box>
                            <Button className={Styles.banner__button}  size="small" variant="contained" color="primary"> Inscribirme ahora </Button>
                        </Typography>
                    </Grid>
                </Container>
        </Grid>
    )
}

export default HomeBanner   