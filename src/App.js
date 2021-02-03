import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import { Route, Link, Switch } from "react-router-dom";
import Display from "./Display.js"

function App() {
  const url = "https://harrypottercm.herokuapp.com"

  const [students, setStudents] = useState([])

  const getStudents = () => {
    fetch(url + "/students")
      .then((response) => response.json())
      .then((data) =>{
        setStudents(data)
      })
  }
  console.log(students)

  const emptyStudent = {
    firstName: "",
    lastName: "",
    year: 0,
    house: "",
    wands: [{}]
  }

  const handleCreate =(newStudent) => {
    fetch(url + "/students", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newStudent)
    })
    .then(() => {
      getStudents()
    })
  }

  React.useEffect(() => getStudents(), []);
  return (
    <div className="App">
      <h1>Hogwarts Students</h1>
      <main>
        <Switch>
          <Route exact path="/" render={(rp) => <Display {...rp} students={students}/>}/>
          <Route
            exact
            path="/create"
            render={(rp) => (
              <Form {...rp} label="create" student={emptyStudent} handleSubmit={handleCreate} />
              
            )}
          />
        </Switch>
      </main>
      
    </div>
  );
}

export default App;
