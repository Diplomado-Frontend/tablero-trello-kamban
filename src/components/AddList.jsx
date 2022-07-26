 
import React from "react";

const AddList = (props) => 
{
    const addList = () => {
      let ltTittleName = document.getElementById('addListTitle').value;
      props.onAddNewList(ltTittleName);
    }

    return (
    <>
      <input id="addListTitle"></input>
      <br/>
       <button onClick={addList}>Add list</button>
    </>  
    )
}

export default AddList;