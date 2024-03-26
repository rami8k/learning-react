// 1. useEffect(() => {}) //Runs after every re-render
// 2. useEffect(() => {}, []) //Runs only on mount
// 3. useEffect(() => {}, [value]) //Runs on mount + when value changes

import { useState, useEffect } from "react";

export default function Effects() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('green')


    useEffect(() => {
        document.title = `Count: ${count} ${color}`

        return () => {
            // cleanup code
        }
    }, [count, color])

    const addCount = () => {
        setCount(c => c + 1)
    }

    const subCount = () => {
        setCount(c => c - 1)
    }

    const changeColor = () => {
        setColor(c => c === 'green' ? 'red' : 'green')
    }

    return (
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Sub</button><br/>
            <button onClick={changeColor}>Change Color</button>

        </>
    )
}