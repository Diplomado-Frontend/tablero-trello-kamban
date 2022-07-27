
import React, { useState, useReducer } from "react";
import AnotherList from './AnotherList';
import AddList from './AddList';
import List from './List';
import { infoCards } from '../data/infoCards';
import "../styles/sass/01_page/_container.scss";
import "../styles/sass/01_page/_addList.scss";


const HomeComp = (props) => {

  let defaultFirstGroup = infoCards.slice(0, 3);
  let defaultSecondGroup = infoCards.slice(4, 6);
  let defaultThirdGroup = infoCards.slice(7, 9);

    const [firstGroup, setFirstGroup] = useState(defaultFirstGroup);
    const [secondGroup, setSecondGroup] = useState(defaultSecondGroup);
    const [thirdGroup, setThirdGroup] = useState(defaultThirdGroup);

    const [showAddList, setShowAddList ] = useState(false);

    let columnList = [{
        cardGroup: firstGroup,
        listName: 'ToDo',
        _id: 1
      }, 
      {
        cardGroup: secondGroup,
        listName: 'In progress',
        _id: 2
      },
      {
        cardGroup: thirdGroup,
        listName: 'Done',
        _id: 3
      }
    ];

    const initialState = { 'columnList': columnList };

    const reducer = (state, action) => {
      switch (action.type) {
        case "ADD_CARD_CARD":
          return {
            ...state,
            columnList: [ ...state.columnList, ...action.payload],
          };
        case "ADD_NEW_COLUMN": 
          return {
            ...state,
            columnList: [...state.columnList, action.payload],         
          };
        default:
          return state;
      }   
    };

    const [infoTrello, dispatch] = useReducer(reducer, initialState);
    const showAddListHandler = () => {   
      setShowAddList(true);
    }

    const closeAddListHadler = () => {   
      setShowAddList(false);
    }

    const handleAddNewList = (name) => {   
      let payload = {
          cardGroup: [],
          listName: name
      }
      dispatch({ type: "ADD_NEW_COLUMN", payload });
    }

    const handleAddNewCard = (cardName, listName) => {

      let obj = JSON.parse(JSON.stringify(infoTrello.columnList));
      let payload =  obj.filter((item)=>{  return item.listName === listName });

      payload[0].cardGroup.push({
                  name: cardName,
                  id: "1a", 
                  type: "img", 
                  description: "description 8",
                  chosen: false,
                  selected: false
                });

                debugger;

      dispatch({ type: "ADD_NEW_CARD", payload });

    }

   return (
      <>
      <section className="wrapper-container">

          <section className="container-trello">

              { infoTrello.columnList.map((column)=>(
                
                    <List key={column._id}
                          currentGroup={column.cardGroup} 
                          onAddNewCard={handleAddNewCard} 
                          listName={column.listName} />
              ))}   
            
          </section>

          <section className="container-addLt">
            <div className="item add-another-list" >
                      <div onClick={showAddListHandler} >
                      { !showAddList && <AnotherList/> } 
                      </div>

                      <div className="add-list">

                        { showAddList && <AddList onAddNewList={handleAddNewList}/> }               
                        { showAddList && 
                            <div onClick={closeAddListHadler}>    
                                <i class='fas fa-times-circle'></i>
                          </div>
                        } 
  
                      </div>                              
            </div>
          </section>

      </section>
 
      </>
    );
  }
  
  export default HomeComp;


