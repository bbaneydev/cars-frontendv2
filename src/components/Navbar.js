import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import '../App.css';
export default function Navbar({ currentUser }) {
    console.log(currentUser);

    return (
        <Menu isOpen={false}>
            {currentUser ?
                <nav>
                    <h1>{currentUser.username}</h1>
                    <Link to='/home'><a className='menu-item' href='/home'>Home</a></Link>
                    <Link to='/profile'><a className='menu-item' href='/profile'>Your Cars</a></Link>
                    <Link to='/'><a className='menu-item' href='/login'>Log out</a></Link>
                    <Link to='/about'><a className='menu-item' href='/about'>About</a></Link>
                </nav>
                :
                <nav>
                    <Link to='/home'><a className='menu-item' href='/home'>Home</a></Link>
                    <Link to='/signup'><a className='menu-item' href='/signup'>Sign up</a></Link>
                    <Link to='/login'><a className='menu-item' href='/login'>Log in</a></Link>
                    <Link to='/about'><a className='menu-item' href='/about'>About</a></Link>
                </nav>
            }
        </Menu>
    )
}

