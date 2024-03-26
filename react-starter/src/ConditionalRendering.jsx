export default function UserGreeting(props) {
    
    return props.isLoggedIn ? <h2>Welcome {props.usernanme}</h2>
                            : <h2>Please log In</h2>

}