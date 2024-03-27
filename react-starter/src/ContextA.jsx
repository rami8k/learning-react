import { useState, createContext } from "react";
import ContextB from "./ContextB";

export const UserContext = createContext()

export default function ContextA() {
    const [user, setUser] = useState("Bro")

    return <div>
        ComponentA
        <h2>Hello, {user}</h2>
        <UserContext.Provider value={user}>
            <ContextB />
        </UserContext.Provider>
    </div>
}