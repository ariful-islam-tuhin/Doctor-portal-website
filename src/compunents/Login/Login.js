import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import login from '../../images/login.png'


const Login = () => {

    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field,value)
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password)
        e.preventDefault();
    }


    const handleGoogleSignIn = () =>{
        signInWithGoogle(location, history)
    }


    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                        login
                    </Typography>
                    <form onsubmit={handleLoginSubmit}>
                        <TextField
                            name='email'
                            OnBlur={handleOnChange}
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="your-email"
                            variant="standard"
                        />
                        <br />
                        <TextField
                            name='password'
                            OnBlur={handleOnChange}
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            variant="standard"
                        />
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>

                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity='success'> user created successfully alert - check it out!</Alert>}
                        {authError && <Alert severity='error'>{authError} </Alert>}
                    </form>
                    <h5>signIn with Google</h5>
                    <Button onClick={handleGoogleSignIn}  variant="contained">google signin</Button>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;