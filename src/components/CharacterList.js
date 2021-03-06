import React, { useEffect, useState } from "react";
import axios from "axios";
// import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log(response.data.results);
      setCharacters(response.data.results);
    })
    .catch(error => {
      console.log("You are piece of crap. Yeah. I can prove it mathematically wubba lubba dub dub.", error);
    });
    
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list" >
      <SearchForm/>
    </section>
  );
  }
