 
import React, { useState } from "react";
import "../styles/sass/01_page/_card.scss";
import Dialog from './generics/Dialog';

const Card = ({ item }) => 
{
    let backgroundColor = "#dad9f3";
    item.type === "file" && (backgroundColor = "#f4d6d2");
    item.type === "img" && (backgroundColor = "#d9f3e9");

    const [ openCardModal, setOpenCardModal ] = useState(false);

    const handleClickOpenModal = () => {
      setOpenCardModal(true);
    }

    return (
         <>
           <div className="card-item" style={Object.assign({}, { backgroundColor })} onClick={handleClickOpenModal}>
            <h4>{item.name}</h4>
          </div>

          { openCardModal && (
              <Dialog
                title={item.name}
                description={item.description}
                open={openCardModal}
          />
      )}
          
        </>  
    )
}

export default Card;

