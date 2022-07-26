
 
import React, { useState, useEffect } from "react";
import { ReactSortable } from "react-sortablejs";
import Card from './Card';

const List = (props) => 
{
     const {listName } = props;
     const [ currentGroup, setCurrentGroup ]  = useState(props.currentGroup);
debugger;
    return (
    <>
        <div className="item">
            # {listName}
                
                <ReactSortable 
                list={currentGroup}
                setList={setCurrentGroup}
                animation={150}
                group="cards"
                onChange={(order, sortable, evt) => {}}
                onEnd={evt => {}}
                >
                     {currentGroup.map(item => (
                     <Card key={item.id} item={item} />
                     ))}
                </ReactSortable>
        </div>
    </>  
    )
}

export default List;