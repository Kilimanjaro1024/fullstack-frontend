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
  React.useEffect(() => getStudents(), []);
  return (
    <div className="App">
      <h1>Hogwarts Students</h1>
      <main>
        <Switch>
          <Route exact path="/" render={(rp) => <Display {...rp} students={students}/>}/>
        </Switch>
      </main>
      
    </div>
  );
}

export default App;
