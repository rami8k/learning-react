import PropTypes from 'prop-types'

export default function List(props) {
    
    const itemList = props.items

    itemList.sort((a, b) => a.name.localeCompare(b.name)) //Alphabetical
    //itemList.sort((a, b) => b.calories - a.calories) //Calories

    const listItems = itemList.map(x => <li key={x.name}>{x.name}: <b>{x.calories}</b></li>)

    return (
        <>
            <h3>{props.category}</h3>
            <ol>{listItems}</ol>
        </>
    )
}

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        calories: PropTypes.number
    })),
    category: PropTypes.string
}

List.defaultProps = {
    cateory: "None",
    items: []
}