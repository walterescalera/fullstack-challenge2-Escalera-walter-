import React from "react";

const Character = ({ name, status, species, image, setCharacterSelected }) => {
  return (
    <>
      <div className="color-square" onClick={()=>{setCharacterSelected(image)}}>
        <img src={image} alt={name} />
        <p>{name}</p>
        <p>{status}</p>
        <p>{species}</p>
      </div>
    </>
  );
};

export default Character;
