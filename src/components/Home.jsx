import React, { useState, useReducer, useEffect } from "react";
import AnotherList from "./AnotherList";
import AddList from "./AddList";
import List from "./List";
import getCardsData from "../Data/getData";
import "../styles/sass/01_page/_container.scss";
import "../styles/sass/01_page/_addList.scss";

const HomeComp = (props) => {

  const [ initialState, setInitialState ]  = useState('');

  useEffect(()=>{

    const url = 'http://localhost:3000/api/cardsInfo';
    const getData = async () => {
      try {

        const response = await fetch(url);
        const json = await response.json();

        let columnList = [
          {
            cardGroup: json.infoCards.slice(0, 3),
            listName: "ToDo",
            _id: Math.floor(Math.random() * 100000).toString(),
          },
          {
            cardGroup: json.infoCards.slice(4, 6),
            listName: "In progress",
            _id: Math.floor(Math.random() * 100000).toString(),
          },
          {
            cardGroup: json.infoCards.slice(7, 9),
            listName: "Done",
            _id: Math.floor(Math.random() * 100000).toString(),
          },
        ];

        setInitialState(columnList);

      } catch (error) {
        console.log("error", error);
      }   
    }

    getData();
  }, []);

  const [showAddList, setShowAddList] = useState(false);

  const showAddListHandler = () => {
    setShowAddList(true);
  };

  const closeAddListHadler = () => {
    setShowAddList(false);
  };

  const handleAddNewList = (name) => {
    let payload = {
      cardGroup: [],
      listName: name,
    };

    setInitialState([...initialState, payload])

  };

  const handleAddNewCard = (cardName, listName) => {
 
   const newCard = [{
        name: cardName,
        listName: listName,
        id: Math.floor(Math.random() * 100000).toString(),
        type: "img",
        description: "description XD",
      }]

    
      setInitialState(current => 
         current.map(obj => {          
                  if (obj.listName === listName) {
                    return { cardGroup: [...obj.cardGroup, ...newCard],
                             listName: obj.listName, 
                            _id: obj._id } ;
                  }
                  return obj;
                }));
  };

  return (
    <>
      <section className="wrapper-container">
        <section className="container-trello">
          {initialState  && initialState.map((column) => (
            <List
              key={column._id}
              currentGroup={column.cardGroup}
              onAddNewCard={handleAddNewCard}
              listName={column.listName}
            />
          ))}
        </section>

        <section className="container-addLt">
          <div className="item add-another-list">
            <div onClick={showAddListHandler}>
              {!showAddList && <AnotherList />}
            </div>

            <div className="add-list">
              {showAddList && <AddList onAddNewList={handleAddNewList} />}
              {showAddList && (
                <div onClick={closeAddListHadler}>
                  <i class="fas fa-times-circle"></i>
                </div>
              )}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default HomeComp;
