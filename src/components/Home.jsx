
import React, { useState } from "react";
import Card from './Card';
import { ReactSortable } from "react-sortablejs";
import "../styles/sass/01_page/_container.scss";

const HomeComp = (props) => {

   const [firstGroup, setFirstGroup] = useState([
      { name: "file1", id: "1", type: "file" },
      { name: "file2", id: "2", type: "file" },
      { name: "file3", id: "3", type: "file" },
      { name: "file4", id: "4", type: "file" }
    ]);
    const [secondGroup, setSecondGroup] = useState([
      { name: "image1", id: "1a", type: "img" }
    ]);
    const [thirdGroup, setThirdGroup] = useState([
      { name: "doc1", id: "1b", type: "doc" },
      { name: "doc2", id: "2b", type: "doc" },
      { name: "doc3", id: "3b", type: "doc" },
      { name: "doc4", id: "4b", type: "doc" },
      { name: "doc5", id: "5b", type: "doc" }
    ]);

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


