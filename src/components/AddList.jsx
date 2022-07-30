import React from "react";

const AddList = (props) => {
  const addListHandler = () => {
    let ltTittleName = document.getElementById("addListTitle").value;
    props.onAddNewList(ltTittleName);
  };

  return (
    <>
      <input id="addListTitle"></input>
      <br />
      <button onClick={addListHandler}>Add list</button>
    </>
  );
};

export default AddList;
