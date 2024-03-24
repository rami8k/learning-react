import {useState} from 'react'

export default function StateComponent() {
    const [name, setName] = useState("Guest")
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName("Spongebob")
        console.log(name)
    }

    const incAge = () => {
        setAge(age + 1)
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed)
    }

    return (
        <div>
            <p>
                Name: {name}
                <br/>
                <button onClick={updateName}>Set Name</button>
                <br/><br/><br/>
                Name: {age}
                <br/>
                <button onClick={incAge}>Inc Age</button>

                <br/><br/><br/>
                IsEmployed: {isEmployed ? "Yes" : "No"}
                <br/>
                <button onClick={toggleEmployedStatus}>Toggle Status</button>
            </p>
        </div>
    )
}