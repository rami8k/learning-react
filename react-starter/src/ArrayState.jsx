import { useState } from "react";

export default function ArrayState() {
    const [foods, setFoods] = useState(["Apple", "Orange"])

    const handleAddFood = () => {
        const newFood = document.getElementById('foodInput').value
        document.getElementById('foodInput').value = ''

        setFoods(f => [...f, newFood])
    }

    const handleRemoveFood = (index) => {
        setFoods(foods.filter((el, i) => i !== index))
    }

    return (
        <div>
            <h2>Foods</h2>
            <ul>
                {foods.map((food, index) => 
                    <li 
                        key={index}
                        onClick={() => handleRemoveFood(index)}
                        >
                            {food}
                    </li>)
                }
            </ul>
            <input type="text" id="foodInput" placeholder="Enter name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
}