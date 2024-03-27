import { useContext } from "react"
import { UserContext } from "./ContextA"

export default function ContextC() {

    const user = useContext(UserContext)

    return <div>ComponentC
        {user}
    </div>
}