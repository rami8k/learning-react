import PropTypes from 'prop-types'

function Student(props) {

    var student = {
        border: "1px solid black",
        padding : "10px"
    }

    return (
        <div style={student}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes": "No"}</p>
        </div>
    )
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

Student.defaultProps = {
    name: "Guest",
    age: 0
}

export default Student