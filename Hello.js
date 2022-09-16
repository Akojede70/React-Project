import React from "react"

const Hello = () => {
    // return (
    // <div>
    //     <h1>Hello Akojede Peter!</h1>
    // </div>
    // ) jsx lines of code

return React.createElement(
    "div",
    {id: "hello", className: "dummyClass"},
    React.createElement("h1", null, "Hello Akojede")
)
}
export default Hello