import React, {useState} from 'react'

export default function AddCar({ handleAdd}) {
        const [make, setMake] = useState('')
        const [model, setModel] = useState('')
        const [engine, setEngine] = useState('')
        const [horsepower, setHorsepower] = useState('')
        const [time, setTime] = useState('')
        const [price, setPrice] = useState('')
        const [image, setImage] = useState('')


        function handleSubmit(e){
            e.preventDefault()
            fetch('https://cars-backend-fi.herokuapp.com/cars', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({
                    make,
                    model,
                    engine,
                    horsepower,
                    time,
                    price,
                    image
                })
            })
            .then(res=>res.json())
            .then((newCar)=>handleAdd(newCar))
            setMake('')
            setModel('')
            setEngine('')
            setHorsepower('')
            setTime('')
            setPrice('')
            setImage('')
        }



    return (
        <div className="add-car">
        <form onSubmit={handleSubmit}>
            <span>Make:</span>
            <input type="text" value={make} onChange={(e)=>setMake(e.target.value)}/>
            <span>Model:</span>
            <input type="text" value={model} onChange={(e)=>setModel(e.target.value)}/>
            <span>Engine:</span>
            <input type="text" value={engine} onChange={(e)=>setEngine(e.target.value)}/>
            <span>HorsePower:</span>
            <input type="text" value={horsepower} onChange={(e)=>setHorsepower(e.target.value)}/>
            <span>Time 0-60's:</span>
            <input type="number" value={time} onChange={(e)=>setTime(e.target.value)}/>
            <span>Price:</span>
            <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <span>Image:</span>
            <input type="text" value={image} onChange={(e)=>setImage(e.target.value)}/>
            <button type='submit'>Submit Your Car</button>
        </form>
        </div>
    )
}