import React from "react";
import { useState } from "react";
import './style.css'

function Add() {

    const [ name, setName] = useState("")
    const [ weight, setWeight ] = useState(0)
    const [ doesPull, setDoesPull ] = useState(false)
    const [ temperment, setTemperment ] = useState("")

  
    return(
        <form onSubmit={(e)=>{
            e.preventDefault()
        }}>
            <h1>Add a Doggo!</h1>
                <label htmlFor="Name">Name:</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}       
                />
            <br/>
            <label htmlFor="Weight">weight:</label>
            <input
                type="number"
                required
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
            />
            <br/>
            <label htmlFor="Temperment">Temperment</label>
            <textarea
                value={temperment}
                onChange={(e) => setTemperment(e.target.value)}
            ></textarea>
            <label htmlFor="leash puller?">Leash Puller?</label>
            <input type="checkbox" checked={this.state.doesPull} value={doesPull.checked} onChange ={(e)=>setDoesPull(e.target.checked)}/>
            <button type="submit">Add</button>
            <p>
             {name}
             <br/>
             {weight}
             <br/>
             {temperment}
             <br/>
             {doesPull}
            </p>
        </form>
    )
}

export default Add