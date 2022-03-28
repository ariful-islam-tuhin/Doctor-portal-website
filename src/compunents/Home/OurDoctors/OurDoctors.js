
import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import doctorsmall from '../../../images/doctor-small.png';
import doctor1 from '../../../images/doctor1.jpg';
import doctor2 from '../../../images/doctor2.jpg';


const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const OurDoctors = () => {
    return (
        <Container sx={{ flexGrow: 1 }}>
            <Typography
                sx={{ fontWeight: 500, m: 2, color: "primary.main" }}
                variant="h3"
                component="div"
            >
                Our Doctors
            </Typography>
            <br /><br />

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                <Grid item xs={12} md={4} style={verticalCenter}>
                    <img style={{ width: '300px', height: '450px', borderRadius: '10px' }} src={doctorsmall} alt="" />

                </Grid>
                <Grid item xs={12} md={4} style={verticalCenter}>
                    <img style={{ width: '300px', height: '450px', borderRadius: '10px' }} src={doctor1} alt="" />
                </Grid>
                <Grid item xs={12} md={4} style={verticalCenter}>
                    <img style={{ width: '300px', height: '450px', borderRadius: '10px' }} src={doctor2} alt="" />
                </Grid>




            </Grid>
        </Container>
    );
};

export default OurDoctors;