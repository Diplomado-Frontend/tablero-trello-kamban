
import React, { useState } from "react";
import Card from './Card';
import { ReactSortable } from "react-sortablejs";
import { infoCards } from '../data/infoCards';
import "../styles/sass/01_page/_container.scss";

const HomeComp = (props) => {

  let defaultFirstGroup = infoCards.slice(0, 3);
  let defaultSecondGroup = infoCards.slice(4, 6);
  let defaultThirdGroup = infoCards.slice(7, 9);

    const [firstGroup, setFirstGroup] = useState(defaultFirstGroup);
    const [secondGroup, setSecondGroup] = useState(defaultSecondGroup);
    const [thirdGroup, setThirdGroup] = useState(defaultThirdGroup);

   return (
      <>
         <section className="container-trello">
         <div className="todo item">
            #TODO
                 
            <ReactSortable
          list={firstGroup}
          setList={setFirstGroup}
          animation={150}
          group="cards"
          onChange={(order, sortable, evt) => {}}
          onEnd={evt => {}}
        >
          {firstGroup.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </ReactSortable>
        </div>
        <div className="inProgress item">
            #IN PROGRESS

        <ReactSortable
          list={secondGroup}
          setList={setSecondGroup}
          animation={150}
          group="cards"
          onChange={(order, sortable, evt) => {}}
          onEnd={evt => {}}
        >
          {secondGroup.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </ReactSortable>
        </div>
        <div className="done item">
            #DONE  

            <ReactSortable
          list={thirdGroup}
          setList={setThirdGroup}
          animation={150}
          group="cards"
          onChange={(order, sortable, evt) => {}}
          onEnd={evt => {}}
        >
          {thirdGroup.map(item => (
            <Card key={item.id} item={item} />
          ))}
        </ReactSortable>
        </div>

        </section>
      </>
    );
  }
  
  export default HomeComp;


