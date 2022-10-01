import React, {useState} from 'react'
import styled from 'styled-components'

const NumberCounter = () => {
  const [counter, setCounter] = useState(0)

  const Button = styled.button`
  margin: 0.5em
  `

  const IncrementCounter = () => {
    setCounter(counter+1)
  }
  
  const DecrementCounter = () => {
    setCounter(counter-1)
  }
    return (
    <div>
        <h1>{counter}</h1>
        <Button onClick={IncrementCounter}>Add</Button>
        <Button onClick={DecrementCounter}>Subtract</Button>

    </div>
  )
}

export default NumberCounter