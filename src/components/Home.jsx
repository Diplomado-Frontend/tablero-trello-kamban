
import React, { useState, useReducer } from "react";
import Card from './Card';
import AnotherList from './AnotherList';
import AddList from './AddList';
import List from './List';
import { ReactSortable } from "react-sortablejs";
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

    const initialState = [ ...firstGroup, ...secondGroup, ...thirdGroup ];

    const reducer = (state, action) => {
      switch (action.type) {
        case "ADD_ITEM_LIST":

          return {
            ...state,
            itemList: [...state.itemList, action.payload],
          };
          // return state.map((todo) => {
          //   if (todo.id === action.id) {
          //     return { ...todo };
          //   } else {
          //     return todo;
          //   }
          // });
        default:
          return state;
      }
    };

    const [infoCards1, dispatch] = useReducer(reducer, initialState);
debugger;
    const showAddListHandler = () => {
    
      // let element = document.getElementsByClassName("add-another-list");
      //  element[0].classList.add("add-another_list-wrapper");
      setShowAddList(true);
    }

    const closeAddListHadler = () => {   
      setShowAddList(false);
    }

    const handleAddItemList = (payload) => {
      debugger;
      dispatch({ type: "ADD_ITEM_LIST", payload });
    };

   return (
      <>
      <section className="wrapper-container">

      <section className="container-trello">

           <List currentGroup={firstGroup} listName="ToDo" props={infoCards1} />
           <List currentGroup={secondGroup} listName="In progress" />
           <List currentGroup={thirdGroup} listName="Done" />

      </section>

        <section className="container-addLt">
          <div className="item add-another-list" >
                    <div onClick={showAddListHandler} >
                     { !showAddList && <AnotherList/> } 
                     </div>

                     <div className="add-list">

                      { showAddList && <AddList /> }               
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


