import React,  {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard';
import Display from './components/display'

function App() {
  
  const [strikes, setStrikes]= useState(0);

  const[balls, setBalls] = useState(0);
  const [points, setPoints]=useState(0);
  const[hits,setHits]=useState(0);
  const [base, setBase]= useState(0)
  const [message, setMessage]=useState('')
  const [runner, setRunner]=useState('')
   const striker =(e)=> {
  
      e.preventDefault();
        console.log("HAY", strikes)
    
      if(strikes ==3){
         setStrikes(0)
         setBalls(0)
          console.log("STRIKE", strikes)
          setMessage("YOURE OUTTA THERE!!!")
        }

      else{
         setStrikes(strikes+ 1)
         setMessage("")
       }
  
       return strikes;
  }
  
  const walk =(e)=> {
    e.preventDefault()
    console.log("BALL", balls)

    if(balls  >=4){
      setBalls(0)
      setMessage("walked")
      setBase(base +1)
      setRunner(`Runner on base ${base}`)
     }else{
      setBalls(balls+1)
      setMessage("");
    }
    return balls
  }

const hit =(e)=> {
  e.preventDefault()
  setStrikes(0)
  setBalls(0)
  setHits(hits+1)
  setMessage('You got a HIT!')
  setBase( base +1)
  setRunner(`runner on ${base}`)
   console.log("HITS", hits)
    
   


  if(hits >3){
    setPoints(points + 1)
    setMessage("YOU SCORED")
    setHits(0)
  }
    return hits
}


const reset =(e)=> {
  e.preventDefault() 
    setHits(0);
    setStrikes(0);
    setBalls(0);
    setBase(0);

  
}


  return (
    <div className="App">
      <header className="App-header">

        {/* <div className = "wrapper"> */}
        <h1 className = "baseball">Baseball</h1>

        {/* </div> */}
        

        <Display strikes = {strikes} 
          striker={striker}
        
        balls={balls} points={points}
         message ={message}
         runner={runner}/>
        </header>

          

        <Dashboard striker ={striker}
         strikes={strikes}
           walk ={walk}
           balls ={balls}
           hit={hit}
           reset={reset}/>
          
     </div>
  );
}

export default App;
