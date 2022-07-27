
 
import React, { useState, useEffect } from "react";
import { ReactSortable } from "react-sortablejs";
import AnotherCard from "./AnotherCard";
import AddCard from "./AddCard";
import Card from './Card';
import "../styles/sass/01_page/_list.scss";

const List = (props) => 
{
     const { listName } = props;
     const [ currentGroup, setCurrentGroup ]  = useState(props.currentGroup);

     const [showAddCard, setShowAddCard ] = useState(false);

     const showAddCardHandler = () => {   
        setShowAddCard(true);
      }

     const closeAddCardHadler = () => {   
        setShowAddCard(false);
      }

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
                         {currentGroup && currentGroup.map(item => (
                         <Card key={item.id} item={item} />
                         ))}
                    </ReactSortable>

                    <div onClick={showAddCardHandler} >
                     { !showAddCard && <AnotherCard/> } 
                     </div>

                     { showAddCard && <AddCard onAddNewCard={props.onAddNewCard} listName={listName}/> } 
                      { showAddCard && 
                          <div onClick={closeAddCardHadler}>    
                              <i class='fas fa-times-circle'></i>
                        </div>
                      } 

       </div>
    </>  
    )
}

export default List;