import React from "react"
import Person from "./Person"

function NameList() {
    const names = ["Bruce", "clark", "Diana", "Bruce"]

            const persons = [
        {
            id: 1,
            name: "Bruce",
            age: 30,
            skill: "React"
        },
        {
            id: 2,
            name: "Peter Bass",
            age: 25,
            skill: "Javascript"
        },
        {
            id: 3,
            name: "Samuel",
            age: 20,
            skill: "Angular"
        }
    ]
// const personList = persons.map(person => <Person key={person.name} person={person} />)

// return <div>{personList}</div> 
// }
        const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
        return <div>{nameList}</div>

}


export  default NameList