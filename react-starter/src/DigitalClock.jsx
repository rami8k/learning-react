import { useState, useEffect } from "react"

export default function DigitalClock() {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    })

    const formatTime = () => {
        const hours = time.getHours()
        const mins = time.getMinutes()
        const secs = time.getSeconds()

        return `${hours}:${mins}:${secs}`
    }

    return <div>
        <span>{formatTime()}</span>
    </div>
}