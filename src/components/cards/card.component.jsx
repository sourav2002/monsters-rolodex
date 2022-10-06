import React from "react";
import './card.styles.css';


export const Card = (data) =>(
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${data.monster.id}?set=set2&size=180x180`}></img>
        <h2> {data.monster.name} </h2>
        <p>{data.monster.email}</p> 
    </div> 
);