import React, {useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ModalAtom from "./ModalAtom";
import SampleComponent from "./SampleComponent";
import Profile from "./Profile";
import "./SampleComponent.css";
import useForm from "./useForm";

export default function Modal() {

    const [isOpen, setisOpen] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [data, setData] = useState({ username: "", age: "" });
    const [values, handleChange] = useForm({ username: "", age: "" });

    return (
        <Container maxWidth="lg">
            <Typography component="div" variant="h4" style={{ backgroundColor: '#fff', height: '100vh', marginTop: '120px' }} >
                {!loggedIn && !isOpen ? 
                <>
                    <button onClick={() => setisOpen(true)}>Click to open Modal</button>
                    
                </> : 
                (loggedIn && <Profile
                    username = {data.username}
                    age = {data.age}
                />)
                }
                {isOpen &&
                    <ModalAtom
                        title={'Modal'}
                        open={isOpen}
                        handleClose={() => setisOpen(false) }
                    >
                        <SampleComponent
                            setisOpen = {setisOpen}
                            setLoggedIn = {setLoggedIn}
                            setData = {setData}
                            values = {values}
                            handleChange = {handleChange}
                        />
                    </ModalAtom>
                }
            </Typography>
      </Container>
    )
}

