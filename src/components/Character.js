import React from 'react'
import styled, { keyframes } from 'styled-components'

// const [character, setCharacter]=useState(null)
const StyledCharacter=styled.div`
    border-style:dotted;
`
const StyledCharacters=styled.img`
    border-radius:20%;
`
export default function Character({src,alt}){
    return (
        <StyledCharacter>
        <StyledCharacters src={src} alt={alt}/> 
        </StyledCharacter>
    )
}
