import React from "react"

const Display = (props) => {
    const {students} = props
    
    const loaded = () =>{
        return(<div style={{textAlign: "center"}}>
            {students.map((student, index) =>(
                <article key={index}>
                    <h1>{student.firstName}</h1>
                    <h1>{student.lastName}</h1>
                    <h1>{student.year}</h1>
                    <h1>{student.house}</h1>
                    <h1>{student.wands.wood}</h1>
                </article>
            ))}
        </div>
        )
    }

    const loading = <h1>Loading...</h1>

    return students.length > 0 ? loaded() : loading;
}

export default Display;