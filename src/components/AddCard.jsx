 
import React from "react";

const AddCard = (props) => 
{
    const addCardHandler = () => {
      let cardTittleName = document.getElementById('addCardTitle').value;
      props.onAddNewCard(cardTittleName, props.listName);
    }

    return (
    <>
      <input id="addCardTitle"></input>
      <br/>
       <button onClick={addCardHandler}>Add Card</button>
    </>  
    )
}

export default AddCard;