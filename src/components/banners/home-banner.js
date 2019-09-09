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

        <div>
            <img className={Styles.banner__image} src={ props.image }   />
            {/* <Container className={Styles.banner__container} maxWidth="lg" >
                <Typography>
                    <Box  fontSize="h3.fontSize" fontWeight="fontWeightBold" > {props.title} </Box>
                    <Button variant="contained" color="primary"> Primary </Button>
                </Typography>
            </Container> */}
      </div>
    )
}

export default HomeBanner   