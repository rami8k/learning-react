// useState Re-renders component when value changes

import { useEffect, useRef, useState } from "react";

// useRef doesnt cause re-render when its value changes.
// use when you want a component to remember some information but don't want component to trigger a re-render
// use cases:
//      1. Accessing/interaction with Dom elements
//      2. Handling focus, animimation, and transitions
//      3. Managing timers and intervals

export default function Ref() {
    const inputRef = useRef(null)
    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)

    useEffect(() => {
        console.log('component rendered!')
        console.log(inputRef)
    })

    function handleClick() {
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = 'yellow'
        inputRef1.current.style.backgroundColor = ''
        inputRef2.current.style.backgroundColor = ''
    }

    function handleClick1() {
        inputRef1.current.focus()
        inputRef1.current.style.backgroundColor = 'yellow'
        inputRef.current.style.backgroundColor = ''
        inputRef2.current.style.backgroundColor = ''
    }

    function handleClick2() {
        inputRef2.current.focus()
        inputRef2.current.style.backgroundColor = 'yellow'
        inputRef.current.style.backgroundColor = ''
        inputRef1.current.style.backgroundColor = ''
    }


    return <div>
        <button onClick={handleClick}>Click</button>
        <br/>
        <input type="text" ref={inputRef}></input>
        <button onClick={handleClick}>Click</button>
        <br/>
        <input type="text" ref={inputRef1}></input>
        <button onClick={handleClick1}>Click</button>
        <br/>
        <input type="text" ref={inputRef2}></input>
        <button onClick={handleClick2}>Click</button>
    </div>
}