// useState Re-renders component when value changes

import { useEffect, useRef, useState } from "react";

// useRef doesnt cause re-render when its value changes.
// use when you want a component to remember some information but don't want component to trigger a re-render
// use cases:
//      1. Accessing/interaction with Dom elements
//      2. Handling focus, animimation, and transitions
//      3. Managing timers and intervals

export default function Ref() {
    const [number, setNumber] = useState(0)
    const ref = useRef(0)

    useEffect(() => {
        console.log('component rendered!')
    })

    function handleClick() {
        setNumber(n => n + 1)
    }

    function handleClick1() {
        ref.current++
        console.log(ref.current)
    }

    return <div>
        <button onClick={handleClick}>useState Click</button>
        <br/>
        <button onClick={handleClick1}>useRef Click</button>
    </div>
}