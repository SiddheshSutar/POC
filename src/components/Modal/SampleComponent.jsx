import React, {useState } from 'react';

const SampleComponent = ({ setisOpen, setLoggedIn, setData, values, handleChange }) => {

    const [error, setError] = useState('');

    function handleLogIn(e){
        e.preventDefault();

        setData(values);
        let valueArray = Object.values(values);
        if(valueArray){
            for (const formIndex in valueArray) {
                if (!valueArray[formIndex]) {
                    setError(`Please check: ${Object.keys(values)[formIndex]}`)
                    return false;
                }
            }
            setisOpen(false);
            setLoggedIn(true);
        }
    }

    return (
        <div className='sample-component-container'>
            <form class="register-form">
                <input name = "username" type="text" placeholder="name" onChange = {handleChange}/>
                <input type="password" placeholder="password"/>
                <input name="age" type="age" placeholder="age" onChange = {handleChange}/>
                <button class="message" onClick = {(e) => handleLogIn(e)}>Log In</button>
                {error && <div style={{color: 'red'}}>{error}</div>}
            </form>
        </div>
    );
}

export default SampleComponent;