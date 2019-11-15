import React from "react";

export default function CharacterCard(props) {
  return (
    <div className="cardWrapper">
      <div className="card" key={props.id}>
        <img src={props.character.image} alt='cast member of rick and morty' />
        <h2>{props.character.name}</h2>
        <p>{props.character.species}</p>
        <p>{props.character.status}</p>
      </div>
    </div>
  );
}
