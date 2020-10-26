import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Character from './components/Character'
import './App.css';
import styled from "styled-components"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  console.log(characters[2])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() =>{
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res =>{
        setCharacters(res.data.results)
        console.log(res);
      })
      .catch (err => {
          console.log('error', err)
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CardStyle>
      <div>
      {characters.map(character => (
        <Character key= {character.id} name ={character.name} species={character.species} image={character.image} location={character.location} status={character.status}/>
      ))}
      </div>
      </CardStyle>
    </div>
  );
}

export default App;

const CardStyle = styled.div `
display: flex;
justify-content: space-between;
flex-flow: row wrap;
padding: 10px;
`
