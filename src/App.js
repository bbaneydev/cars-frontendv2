import React, { useState, useEffect } from "react"
import { Switch, Route, useHistory } from 'react-router-dom'
import Signup from "./components/Signup"
import Login from './components/Login'
import Home from './components/Home'
import "./App.css"
import Navbar from './components/Navbar'
import Pagination from './components/Pagination'
import Reviews from "./components/Reviews";
import AddCar from './components/AddCar'
function App() {
  const [user, setUser] = useState([])
  const [currentUser, setCurrentUser] = useState(null)
  const [cars, setCars] = useState([])
  const [searchIcon, setSearchIcon] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)
  const history = useHistory()
  

  useEffect(() => {
    fetch("https://cars-backend-fi.herokuapp.com/cars")
      .then(res => res.json())
      .then(setCars)
  }, [])

  console.log(cars)

  function addUser(newUser) {
    const updatedUser = [...user, newUser]
    setUser(updatedUser)
  }

  function handleSearchIcon() {
    setSearchIcon(!searchIcon)
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = cars.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo(0, 0)
  }


  useEffect(()=>{
    fetch('https://cars-backend-fi.herokuapp.com/auth')
      .then(res => {
        if (res.ok) {
          res.json().then(user => setUser(user))
        } else {

        }
      })
},[])

  function handleLogout() {
    fetch(`https://cars-backend-fi.herokuapp.com/logout`, {
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          setUser('')
          history.push('/login')
        }
      })
  }

  function handleAdd(newCar){
    const updatedCars = [...cars, newCar]
    setCars(updatedCars)
  }


  return (
    <div className="App">
      <Navbar currentUser={currentUser} />
      <Switch>
      <Route path='/home/:id'>
          <Reviews />
        </Route>
        <Route path='/addcar'>
          <AddCar handleAdd={handleAdd}/>
        </Route>
        <Route path='/login'>
          <Login setCurrentUser={setCurrentUser} handleLogout={handleLogout} />
        </Route>
        <Route exact path='/home'>
          <Home handleLogout={handleLogout} user={user} cars={currentPosts} handleSearchIcon={handleSearchIcon} searchIcon={searchIcon} />
          <Pagination cars={cars} postsPerPage={postsPerPage} totalPosts={cars.length} paginate={paginate} />
        </Route>
        <Route path='/signup'>
          <Signup addUser={addUser} />
        </Route>
      </Switch>
    </div>
  );
  
}

export default App
