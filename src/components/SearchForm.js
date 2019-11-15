import React, { useState, useEffect } from "react";
import axios from "axios";
import Styled from "styled-components";

const OutputCard = Styled.div`
  display: flex
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2% auto;
  width: 80%;
  background: #fff;
  color: #556e3c;
  padding: 10px;
  min-height: 100px;
  border-radius: 6px;
  box-shadow: 0 19px 38px #0000004d,
  0 15px 12px #00000038
  `

const StyledCard = Styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
`

const FormBox = Styled.input`
  width: 500px;
  height: 20px;
  margin: 0 auto;
  border: 2px solid #000;
  text-align: center;
`

export default function SearchForm({onSearch}) {
 
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setQuery] = useState("");
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => { 
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log(response);
        setSearchResults(characters);
      });
  }, [searchTerm]);
  const handleInputChange = event => {
    setQuery(event.target.value);
  };
  return (
    <div>
      <div className="search">
        <FormBox
          type="text"
          onChange={handleInputChange}
          value={searchTerm}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </div>
      <div> 
        {searchResults.map(data => {
          return (
            <OutputCard key={data.id}>
              <img src={data.image} alt='cast member of rick and morty' />
              <StyledCard>
              <h2>
                {data.name}
              </h2>
              <h3>Status: {data.status}</h3>
              <h3>Species: {data.species}</h3>
              </StyledCard>
            </OutputCard>
          );
        })}
      </div>
    </div>
  );
}

