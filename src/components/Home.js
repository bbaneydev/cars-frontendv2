import React from 'react'

export default function Home({ handleLogout, user }) {
    return (
        <div>
            <h1>Home</h1>
            <h1>{user.username}</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}