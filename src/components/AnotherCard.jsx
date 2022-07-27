 
import React from "react";

const AnotherCard = (props) => 
{
    const { showAddCardHandler } = props;

    return (
    <>
    <div handleClick={showAddCardHandler}>
        <p>+ Add card</p> 
    </div>
     
    </>  
    )
}

export default AnotherCard;