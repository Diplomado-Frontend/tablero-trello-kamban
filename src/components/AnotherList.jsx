 
import React from "react";

const AnotherList = (props) => 
{
    const { showAddListHandler } = props;

    return (
    <>
    <div handleClick={showAddListHandler}>
        <p>+ Add another list</p> 
    </div>
     
    </>  
    )
}

export default AnotherList;