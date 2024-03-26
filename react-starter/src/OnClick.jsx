export default function Button() {
    // //Passing params
    // const handleClick = () => console.log("clicked!")
    // const handleClick2 = name => console.log(`${name} stop clicking!`)
    // return (<button onClick={() => handleClick2("DJ")}>Click me</button>)

    // //Conditional
    // let count = 0
    // const handleClick = () => {
    //     if(count < 3) {
    //         count ++
    //         console.log(`clicked ${count}!`)
    //     } else {
    //         console.log(`${name} stop clicking!`)
    //     }
    // }
    // return (<button onClick={() => handleClick("DJ")}>Click me</button>)

    // event handler
    const handleClick = e => e.target.textContent = "OUCH!"
    return (<button onDoubleClick={(e) => handleClick(e)}>Click me</button>)
}