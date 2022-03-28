import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Button, Container } from '@mui/material';
import Box from '@mui/material/Box';
import bg from '../../../images/footer-bg.png';


const footerBg = {
    background: `url(${bg})`,



}
const Footer = () => {
    return (
        <Container style={footerBg} sx={{ flexGrow: 1 }}>
             
                        <br />
                        <br />
                        <br />
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                <Grid item xs={12} md={3}>
                    <Box sx={{ p: 4 }}>
                      
                        <Typography variant='body1' sx={{ fontSize: 14, color: 'gray' }}>
                            Emergency Dental Care
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: 14, color: 'gray' }}>
                            Check Up
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: 14, color: 'gray' }}>
                            Treatment of Personal Diseases
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: 14, color: 'gray' }}>
                            Tooth Extraction
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: 14, color: 'gray' }}>
                            Check Up
                        </Typography>

                    </Box>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Box sx={{ p: 4 }}>

                        <Typography variant='h4' sx={{  color: 'gray' }}>
                            Services
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: 14, color: 'gray' }}>
                            Emergency Dental Care
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: 14, color: 'gray' }}>
                            Check Up
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: 14, color: 'gray' }}>
                            Treatment of Personal Diseases
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: 14, color: 'gray' }}>
                            Tooth Extraction
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: 14, color: 'gray' }}>
                            Check Up
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: 14, color: 'gray' }}>
                            Check Up
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: 14, color: 'gray' }}>
                            Check Up
                        </Typography>


                    </Box>
                </Grid>

                <Grid item xs={12} md={3}>
                    <Box sx={{ p: 4 }}>

                        <Typography variant='h4' sx={{  color: 'gray' }}>
                            Oral Health
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: 14, color: 'gray' }}>
                            Emergency Dental Care
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: 14, color: 'gray' }}>
                            Check Up
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: 14, color: 'gray' }}>
                            Treatment of Personal Diseases
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: 14, color: 'gray' }}>
                            Tooth Extraction
                        </Typography>
                        <Typography variant='body1' sx={{ fontSize: 14, color: 'gray' }}>
                            Check Up
                        </Typography>

                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box sx={{ p: 4 }}>
                        <Typography variant='h4' sx={{ color: 'gray' }}>
                            Our Address
                        </Typography>
                    
                        <Typography variant='body1' sx={{ color: 'gray' }}>
                          2154654
                        </Typography>
                
                        <Typography variant='body1' sx={{ color: 'gray' }}>
                            New(york)
                        </Typography>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Footer;