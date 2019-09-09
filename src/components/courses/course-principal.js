import React from 'react'
import { Container, Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const CoursePrincipal = (props) => (
    <Container maxWidth="lg" >
        <Grid  spacing={4}  container >
            <Grid  xs={12} md={7}  item >
                <img height="320"  src={props.image} alt=""/>
            </Grid>
            <Grid xs={12} md={5} item container justify="center"   alignItems="flex-start"   direction="column" >
                {/* <h4 className="g-subtitle container-bottom mb-4"></h4> */}
                <Typography > 
                    <Box fontSize="subtitle1.fontSize"> SET 19   </Box>
                    <Box fontSize="h5.fontSize" fontWeight="fontWeightBold" > { props.title }  </Box>
                    <Grid container alignItems="center"  >
                        <img  width="50" height="48" src={ props.exhibitorImage } className="attachment-full size-full" alt="" />
                        {/* <h6 className="text-pink g-subtitle "> { props.exhibitor } </h6>                 */}
                        <Box fontSize="subtitle1.fontSize"> { props.exhibitor }  </Box>
                        {/* <Typography variant="subtitle2">  { props.exhibitor } </Typography> */}
                    </Grid>
                </Typography>
                <Typography  gutterBottom  variant="body2" >{ props.description }  </Typography>
                {/* <p className="font-size-14"> </p> */}

                <Button variant="contained"   color="primary"> Inscríbete ahora </Button>
                
                {/* <a className="nav-link btn-external active" target="_blank" href="https://miscursosucb.belcorp.biz/course/view.php?id=2159" >Inscríbete ahora</a> */}
            </Grid>
        </Grid>
    </Container>
)

export default CoursePrincipal