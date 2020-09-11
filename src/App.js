import React, { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character'
import axios from 'axios'
import { ThemeProvider } from 'styled-components'
import theme from './theme'


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
    .catch((err)=>{
      console.log(err)
      alert('Bad api call')
    })
  } , [])

  console.log(characters)





  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <h1 className="Header">R&M <br></br>Characters</h1>
      {
        characters.map((character,index)=>(
        <Character src={character.image} alt={character.name}/> 
        ))
      }
    </div>
    </ThemeProvider>
  );
}

export default App;
