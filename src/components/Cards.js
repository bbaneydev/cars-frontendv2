import React from 'react'
import { Link } from 'react-router-dom'

export default function Cards({ engine, horsepower, image, make, model, price, time, id }) {
    return (
        <div className='flip-card'>
            <div className='inner'>
                <div className='front'>
                    <img src={image} alt="car" />
                    <h1>{make} {model}</h1>
                </div>
                <div className='back'>
                    <button className='review' ><Link to={`/home/${id}`} style={{ textDecoration: 'none', color: 'black' }}>Add Review</Link></button>
                    <div className='back-container'>
                        <div className='back-info'>
                            <h1>{make} {model}</h1>
                            <p>{engine}</p>
                            <p>{price}</p>
                            <p>{horsepower}</p>
                            <p>{time}s 0-60 Time</p>
                        </div>
                        <div className='back-image'>
                            <img src={image} alt='car' />
                        </div>
                    </div>
                    <button className='btm-btn'>Wishlist</button>
                    <button className='fav-btn'>Favorite</button>
                </div>
            </div>
        </div>
    )
}