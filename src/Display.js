import React from "react"

const Display = (props) => {
    const {students} = props
    console.log(students)
    const loaded = () =>{
        return(
            <div style={{textAlign: "center"}}>
                {students.map((student, index) =>(
                    <article key={index}>
                        <h1>{student.firstName}</h1>
                        <h1>{student.lastName}</h1>
                        <h1>{student.year}</h1>
                        <h1>{student.house}</h1>
                        {student.wands.map((wand, index) => ( 
                            <article>
                                <h1>{wand.wood}</h1>
                                <h1>{wand.length}</h1>
                                <h1>{wand.core}</h1>
                            </article>
                        ))}
                    </article>
                ))}
        </div>
        )
    }

    const loading = <h1>Loading...</h1>

    return students.length > 0 ? loaded() : loading;
}

export default Display;