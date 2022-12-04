import React, { useState, useEffect }  from "react";
import './style.css';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Home from "./Home";
import Add from "./Add";
import NavBar from "./NavBar";
import Edit from "./Edit";



function App() {
  const [ walks, setWalks ] = useState([])
  const [ dogs, setDogs ] = useState([])
  const [ walkers, setWalkers ] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/walk")
    .then((r)=>r.json())
    .then((walks)=> setWalks(walks));
  },[])

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
              <Route path="/dogs/:id" element={ <Edit/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
