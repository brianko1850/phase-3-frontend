import React from "react";
import './style.css'
import { useState } from "react";

function Edit({ dogs, onEdit }) {

    const displayDogs = dogs.map(dog=>{
        return (
            <ul>
                <h2>{dog.name}</h2>
                <li>Weight:{dog.weight}lbs</li>
                <li>Temperment:{dog.temperment}</li>
                <li>leash puller:{dog.does_pull}</li>
            </ul>
        )
    })

    return(
       <>
       {displayDogs}
       </>
    )
}

export default Edit