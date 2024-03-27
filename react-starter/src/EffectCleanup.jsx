// 1. useEffect(() => {}) //Runs after every re-render
// 2. useEffect(() => {}, []) //Runs only on mount
// 3. useEffect(() => {}, [value]) //Runs on mount + when value changes

// Uses
// 1. Event Listeners
// 2. DOM Manipulation
// 3. Subscriptions (real-time updates)
// 4. Fetching data from an API
// 5. Cleanup when a component unmounts

import { useEffect, useState } from "react";

export default function EffectCleanup() {

    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    
    const handleResize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    

    return <div>
        <p>Width {width}</p>
        <p>Height {height}</p>
    </div>

}