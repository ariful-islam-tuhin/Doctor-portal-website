import { Button, CircularProgress, Container, Grid, TextField, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../images/login.png'



const Register = () => {

    const [loginData, setLoginData] = useState({})
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

  
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        // console.log(newLoginData)
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }


    return (
        <Container>
            <Grid  container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        Register
                    </Typography>
                    {!isLoading && <form onsubmit={handleLoginSubmit}>

                        <TextField
                            name='name'
                            type='name'
                            OnBlur={handleOnBlur}
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your-Name"
                            variant="standard"
                        />
                        <TextField
                            name='email'
                            type='email'
                            OnBlur={handleOnBlur}
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            variant="standard"
                        />

                        <br />
                        <TextField
                            name='password'
                            OnBlur={handleOnBlur}
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            variant="standard"
                        />
                        <TextField
                            name='password2'
                            OnBlur={handleOnBlur}
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Re-type your Password"
                            type="password"
                            variant="standard"
                        />
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already register? Please login</Button>
                        </NavLink>
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Rgstr</Button>

                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity='success'> user created successfully alert - check it out!</Alert>}
                    {authError && <Alert severity='error'>{authError} </Alert>}



                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;