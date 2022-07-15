 
import React from "react";
import "../styles/sass/01_page/_card.scss";

const Card = ({ item }) => 
{
    let backgroundColor = "#dad9f3";
    item.type === "file" && (backgroundColor = "#f4d6d2");
    item.type === "img" && (backgroundColor = "#d9f3e9");

    return (
         <>
           <div className="card-item" style={Object.assign({}, { backgroundColor })}>
            <h4>{item.name}</h4>
          </div>
          
        </>  
    )
}

export default Card;

