import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

export default function Login({ setUser, handleLogin }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const [user, setUser] = useState()
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        fetch('https://cars-backend-fi.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(user => {
                        console.log(user)
                        setUser(user)
                        // history.push('/home')
                    })
                } else {
                    res.json().then(errors => {
                        console.error(errors)
                    })
                }
            })
    }

    return (
        <div className='bg-image'>
            <form onSubmit={handleSubmit}>
                <span>Username: </span>
                <input placeholder='Username..' value={username} name="username" required onChange={(e) => setUsername(e.target.value)} />
                <span>Password: </span>
                <input placeholder='Password..' value={password} name="password" required onChange={(e) => setPassword(e.target.value)} />
                <button type='submit'>Sign up!</button>
            </form>
        </div>
    )
}