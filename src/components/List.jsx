
 
import React, { useState, useEffect } from "react";
import { ReactSortable } from "react-sortablejs";
import AnotherCard from "./AnotherCard";
import Card from './Card';
import "../styles/sass/01_page/_list.scss";

const List = (props) => 
{
     const {listName } = props;
     const [ currentGroup, setCurrentGroup ]  = useState(props.currentGroup);

    return (
    <>
        <div className="item card-list">
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

                    <AnotherCard/>
              
       </div>
    </>  
    )
}

export default List;