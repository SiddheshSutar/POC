import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Loader from './Loader';
import Button from './Button';
import Profile from './Profile';
import './Session.css';

export default function Session() {
     
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [loading, setloading] = useState(false);

    // simulate componentDidMount
    useEffect(() => {
        var stored_isLogIn = localStorage.getItem('isLoggedIn');

        // check login on every refresh/mount
        if(stored_isLogIn){
            setisLoggedIn(true);
        }

    }, []);

    function mockApiLogin(){

        // first show loader
        setloading(true);

        // Log In after 2 sec
        setTimeout(() => {

            // set flag in localStorage as well
            setisLoggedIn(true);
            localStorage.setItem('isLoggedIn', true);

            // now disable loader
            setloading(false);

        }, 2000)
    }

    function mockApiLogout(){

        // first show loader
        setloading(true);

        // Log Out after 2 sec
        setTimeout(() => {
            setisLoggedIn(false);

            if(localStorage.getItem('isLoggedIn')){
                localStorage.getItem('isLoggedIn', false);
            }
            
            // now disable loader
            setloading(false);

        }, 2000)
    }

    return (
        <Container maxWidth="lg">
            <Typography component="div" variant="h4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', height: '100vh', marginTop: '120px' }} >

                {loading ?
                    <div className='loader-container'>
                        <Loader />
                    </div> : (
                        <div className='profile-div-container'>
                            <Profile
                                isLoggedIn={isLoggedIn}
                            />
                            {isLoggedIn ? (
                                <Button
                                    onClick={() => mockApiLogout()}
                                    btnValue='Log Out'
                                    className='logout-btn-container'
                                />
                            ) : (
                                    <Button
                                        onClick={() => mockApiLogin()}
                                        btnValue='Log In'
                                        className='login-btn-container'
                                    />
                                )}
                        </div>
                    )
                }
            </Typography>
      </Container>
    )
}

