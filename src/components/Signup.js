import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

function Signup({ addUser }) {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        fetch('https://cars-backend-fi.herokuapp.com/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(res => res.json())
            .then(newUser => addUser(newUser))

        setusername('')
        setpassword('')
        history.push('/login')
    }

    return (
        <div className='bg-image'>
            <div className='form'>
                <h1>Sign up</h1>
                <form onSubmit={handleSubmit}>
                    <div className='form-container'>
                        <span for="username">Username: </span>
                        <input placeholder='Username' value={username} name="username" required onChange={(e) => setusername(e.target.value)} />
                        <span for="password">Password: </span>
                        <input type='password' value={password} placeholder='Password' name="password" onChange={(e) => setpassword(e.target.value)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
                        <div className='form-button'>
                            <button type='submit'>Sign up!</button>
                            <button><Link to='/login'>Cancel</Link></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup