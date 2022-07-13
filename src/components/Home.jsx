
import React, { useState } from "react";
import ListCard from './ListCard';
import "../styles/sass/01_page/_container.scss";

const HomeComp = (props) => {

   return (
      <>
         <section className="container-trello">
         <div className="todo item">
            #TODO
           <ListCard />
        </div>
        <div className="inProgress item">
            #IN PROGRESS
        </div>
        <div className="done item">
            #DONE
        </div>
        </section>
      </>
    );
  }
  
  export default HomeComp;


