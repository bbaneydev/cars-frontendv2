import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Reviews() {
  const [singleCar, setSingleCar] = useState([])
  const { id } = useParams()


  useEffect(() => {
    fetch(`http://localhost:3000/cars/${id}`)
      .then(res => res.json())
      .then((singleCar) => {
        setSingleCar(singleCar.reviews)
      })
  }, [id])


  return (
    <React.Fragment>
      <h1>React Accordion Demo</h1>
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title">
            <div>review</div>
            <div>+</div>
          </div>
          <div className="accordion-content">{singleCar.map(review => (
            <p>{review.comment}</p>
          ))}</div>
        </div>
      </div>
    </React.Fragment>
  );
};


export default Reviews;