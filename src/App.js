import React, { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character'
import axios from 'axios'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [baseUrl]=useState('https://rickandmortyapi.com/api/character')
  const  [characters, setCharacters]=useState([
    {
      name:'Morty',
      image:'https://rickandmortyapi.com/api/character/2'
    }
  ])

useEffect(()=>{
  axios.get(baseUrl)
    .then((res)=>{
      console.log(res.data.results)
      setCharacters(res.data.results)
    })
  } , [])

  console.log(characters)





  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character />
      {
        characters.map((character,index)=>(
        <img src={character.image} alt={character.name}/> 
        ))
      }
    </div>
  );
}

export default App;
