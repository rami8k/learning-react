import { useState } from "react";

export default function Car() {
    const [car, setCar] = useState({
        year: 2024,
        make: "Ford"
    })

    const handleYearChange = e => {
        setCar(c => ({ ...c, year: e.target.value }))
    }

    const handleMakeChange = e => {
        setCar(c => ({ ...c, make: e.target.value }))
    }

    return (
        <div>
            <p>Your car is: {car.year} {car.make}</p>

            <input type="number" value={car.year} onChange={handleYearChange}/><br/>
            <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
        </div>
    )
}