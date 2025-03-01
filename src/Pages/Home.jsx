import React, { useState , useEffect} from 'react'
import Header from '../Components/HeaderContent/Header'
import Body from '../Components/BodyContent/Body'
import './Home.css'


function Home() {
  
  // buttons logic increment and decrement
  const [count,setcount]= useState(0)
  const [click, setclick] = useState(0)
  let increment = () => {setcount(count + 1)};
  let decrement = () => {setcount(count - 1)};
  let clickCount = () => {setclick(click +1)};


  // useeffect
  useEffect(() =>{ console.log("hey") },[count])

  
  return (
    <div>
      <Header />
      <Body>
        <h1>My HomePage </h1>
        <p>Count {count}</p>
        <button onClick={decrement} className="button">-</button>
        <button onClick={increment} className="button">+</button>
        
        <p>You have clicked {click} times.</p>
        <button onClick={clickCount} className="button">Click Me</button>
        
       
      </Body>
    </div>
  )
}

export default Home
