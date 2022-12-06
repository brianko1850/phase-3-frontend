import React from "react";
import { useState, useEffect } from "react";
import './style.css'

function Home() {

    const [ walks, setWalks ] = useState([])
    const walkingCard = walks.map(walk=> {
        return (
            <div>
                <ul>
                    <li>Walker: {walk.walker_id}</li>
                    <li>Dog: {walk.dog_id}</li>
                    <li>Duration: {walk.duration} minutes </li>
                    <li>Start time: {walk.start_time}</li>
                </ul>
            </div>
        )
    })
    useEffect(() => {
        fetch("http://localhost:9292/walks")
        .then((r)=>r.json())
        .then((walks)=> setWalks(walks));
      },[])


    return(
        <div>
            <h1>Walks</h1>
            {walkingCard}
        </div>
    )
}

export default Home