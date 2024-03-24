import profilePic from './assets/profile.jpeg'

function Card() {
    return (
        <div className="card">
            <img className="card-image" alt="profile picture" src={profilePic}></img>
            <h2>My Card</h2>
            <p>Software Engineer and play video games</p>
        </div>
    )
}

export default Card