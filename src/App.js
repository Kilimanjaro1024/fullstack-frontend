import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import { Route, Link, Switch } from "react-router-dom";
import Display from "./Display.js"
import Form from "./Form.js"

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
    wands: []
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

  const [selectedStudent, setSelectedStudent] = React.useState(emptyStudent);

  const selectStudent = (student) => {
    setSelectedStudent(student)
  }

  const handleUpdate = (student) =>{
    fetch(url + "/students/id/" + student._id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(student)
    })
    .then(() => {
      getStudents()
    })
  }

  const deleteStudent = (student) => {
    fetch(url + "/students/id/" + student._id, {
      method: "delete"
    })
    .then(() => {
      getStudents()
    })
  }

  React.useEffect(() => getStudents(), []);
  return (
    <div className="App">
      <h1>Hogwarts Students</h1>
      <Link to="/create">
        <button>Add Student</button>
      </Link>
      <main>
        <Switch>
          <Route exact path="/" render={(rp) => <Display {...rp} students={students} selectStudent={selectStudent} deleteStudent={deleteStudent}/>}/>
          <Route
            exact
            path="/create"
            render={(rp) => (
              <Form {...rp} label="create" student={emptyStudent} handleSubmit={handleCreate} />
              
            )}
          />
          <Route
            exact
            path="/edit"
            render={(rp) => (
              <Form {...rp} label="update" student={selectedStudent} handleSubmit={handleUpdate} />
            )}
          />
        </Switch>
      </main>
      
    </div>
  );
}

export default App;
