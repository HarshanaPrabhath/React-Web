import React, { useState } from 'react'
import Header from '../Components/HeaderContent/Header'
import Body from '../Components/BodyContent/Body'
import './Home.css'


function Home() {
  
  const [count,setcount]= useState(0)

  let increment = () => {setcount(count + 1)};
  let decrement = () => {setcount(count - 1)};


  return (
    <div>
      <Header />
      <Body>
        <h1>My HomePage </h1>
        <p>Count {count}</p>

        <button onClick={decrement} className="button">-</button>
        <button onClick={increment} className="button">+</button>
        
        
       
      </Body>
    </div>
  )
}

export default Home
