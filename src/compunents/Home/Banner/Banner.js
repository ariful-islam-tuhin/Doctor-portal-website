import React from 'react';
import Grid from '@mui/material/Grid';




import treatment from '../../../images/treatment.png';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png';
import { Typography, Button, Container } from '@mui/material';
import  Box  from '@mui/material/Box';



const bannerBg = {
    background: `url(${bg})`,

    
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}
const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                    <Typography variant='h3'>
                        your New smile <br />
                    </Typography>
                    <Typography variant='h6' sx={{ fontSize: 12, color: 'gray' }}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus nobis, obcaecati eveniet doloremque esse blanditiis tenetur cupiditate eum impedit aliquam?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus nobis, obcaecati eveniet doloremque esse blanditiis tenetur cupiditate eum impedit aliquam?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus nobis, obcaecati eveniet doloremque esse blanditiis tenetur cupiditate eum impedit aliquam?
                    </Typography>
                    <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>get appoinment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>

            </Grid>
            <br />
            <br />
      
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
            <Grid item xs={12} md={6} style={verticalCenter}>
                    <img style={{ width: '450px', height:'350px', borderRadius:'10px'}} src={treatment} alt="" />
                </Grid>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                
                    <Typography variant='h6' sx={{ fontSize: 12, color: 'gray' }}>
                        dhaka ipsum, dolor sit amet consectetur adipisicing elit. Minus nobis, obcaecati eveniet doloremque esse blanditiis tenetur cupiditate eum impedit aliquam?
                        sylhet  ipsum, dolor sit amet consectetur adipisicing elit. Minus nobis, obcaecati eveniet doloremque esse blanditiis tenetur cupiditate eum impedit aliquam?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus nobis, obcaecati eveniet doloremque esse blanditiis tenetur cupiditate eum impedit aliquam?
                        fruits ipsum, dolor sit amet consectetur adipisicing elit. Minus nobis, obcaecati eveniet doloremque esse blanditiis tenetur cupiditate eum impedit aliquam?
                        lazy ipsum, dolor sit amet consectetur adipisicing elit. Minus nobis, obcaecati eveniet doloremque esse blanditiis tenetur cupiditate eum impedit aliquam?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus nobis, obcaecati eveniet doloremque esse blanditiis tenetur cupiditate eum impedit aliquam?
                    </Typography>
                   
                    </Box>
                </Grid>
               

            </Grid>
        </Container>
    
    );
};


export default Banner;