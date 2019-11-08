import React, {useState, useEffect} from "react";
import Display from './display';



const Dashboard = (props) => {
// let initialCount = 0;

const [strikes, setStrikes]= useState(0);

const[balls, setBalls] = useState([]);

  

useEffect(()=> {

     


}, [strikes])



  return (

        <div>
        
        <button onClick={props.striker}>strikes</button>
        <button onClick ={props.walk}>Balls</button>
        <button onClick ={props.hit}>HIT</button>
        <button onClick ={props.reset}>RESET</button>


          

          <h1>{strikes}</h1>
          {/* <Display strikes = {strikes}/> */}


        </div>



  )



}

export default Dashboard