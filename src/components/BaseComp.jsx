 
import React from "react";

const BaseComp = (props) => 
{
    const { githubLink } = props;

    
    return (
    <>
      <a href={githubLink}>Aquí</a> puedes ver mi perfil de GitHub.
    </>  
    )
}

export default BaseComp;