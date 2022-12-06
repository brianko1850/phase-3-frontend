import React, { useState, useEffect }  from "react";
import './style.css';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Home from "./Home";
import Add from "./Add";
import NavBar from "./NavBar";
import Edit from "./Edit";



function App() {

  useEffect(()=> {
    fetch("http://localhost:9292/dogs")
    .then((r)=> r.json())
    .then(dogs => setDogs(dogs))
  },[])
  
  const [ dogs, setDogs ] = useState([])

  
  function handleAddDogs(newDog) {
    setDogs([...dogs, newDog])
  }

  return (
    <div className="app">
      <Router>
        <NavBar/>
          <Routes>
              <Route path="/" element={ <Home />}/>
              <Route path="/dogs/new" element={ <Add onAddDog={handleAddDogs}/>}/>
              <Route path="/dogs/:id" element={ <Edit dogs={dogs} onEdit={setDogs}/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
