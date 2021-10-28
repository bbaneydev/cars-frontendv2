import React, { useState, useEffect } from "react"
import Login from './components/Login'
import Home from './components/Home'
import "./App.css"

function App() {
  const [user, setUser] = useState([])

  useEffect(() => {
    fetch('https://cars-backend-fi.herokuapp.com/auth')
      .then(res => {
        if (res.ok) {
          res.json().then(user => setUser(user))
        } else {

        }
      })
  }, [])

  function handleLogout() {
    fetch(`https://cars-backend-fi.herokuapp.com/logout`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          setUser('')
        }
      })
  }

  if (!user) return <Login />
  if (user) return <Home handleLogout={handleLogout} user={user} />
  return (
    <Login setUser={setUser} />
  )
}

export default App
