import React , {useEffect} from "react";


const Display = (props)=> {

    console.log("DISPLAY", props.strikes)

      useEffect(()=> {
        console.log("DISPLAY STRIKES", props.strikes)
           

      }, [props.strikes])




    return (
       <div>
           <h1>{props.message}</h1>
           <h3>{props.runner}</h3>
        <h1>Score: {props.points}</h1>
       <h1>Strikes:{props.strikes}</h1>
       <h2>Ball:{props.balls}</h2>





       </div>





    )






}
export default Display