import { useState } from "react";

export default function ObjectArrayState() {
    const [cars, setCars] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")


    const handleAddCar = () => {
        const newCar = {
            year: carYear,
            make: carMake
        }

        setCars(c => [...c, newCar])

        setCarYear(new Date().getFullYear())
        setCarMake("")
    }

    const handleRemoveCar = index => {
        setCars(c => c.filter((_el, i) => i !== index))
    }

    const handleYearChange = e => {
        setCarYear(e.target.value)
    }

    const handleMakeChange = e => {
        setCarMake(e.target.value)
    }

    return (
        <div>
            <h2>Cars</h2>

            <ul>
                {cars.map((car, index) => 
                    <li key={index} onClick={() => handleRemoveCar(index)}>{car.year} {car.make}</li>)}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange}/><br/>
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make"/><br/>
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    )
}