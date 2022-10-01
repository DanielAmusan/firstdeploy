import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div` 
    display :flex
`
const CardBox = styled.div` 
    width: 150px;
    height: 150px;
    margin:1em;
    background: blue;
    padding:1em;
`




const Cards = () => {
  return (
    <CardContainer>
        <CardBox>
            <h2>id</h2>
            <h1>Title</h1>
            <p>body</p>
        </CardBox>
    </CardContainer>
  )
}

export default Cards