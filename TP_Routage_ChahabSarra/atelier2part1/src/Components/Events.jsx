import Event from "./Event"
import Alert from 'react-bootstrap/Alert';
import listEvent from "../data/events.json"
import { Row } from "react-bootstrap"
import { useState, useEffect } from 'react';

export default function Events() {
  
    const [showAlert, setshowAlert]= useState(false)
    const [showWelcome ,setshowWelcome]= useState(false)
    const modifAlert=()=>{
        setshowAlert(true);
        setTimeout(()=>setshowAlert(false), 3000)
    }
     useEffect(()=>{
        setshowWelcome(true);
       setTimeout(()=>setshowWelcome(false), 3000)
  return ()=>{
    console.log("Welcome unmounting")
   
  }   },[]);
    
    return <>
    {showWelcome &&  <Alert variant ="success">
          Bienvenu! 
        </Alert>}
  <Row>

    { listEvent?.map((element, index)=>{
        return <Event key ={index} e={element} fonctionAlert= {modifAlert}/>
    })} </Row>
    {showAlert &&  <Alert variant ="success">
          you have booked an event ! 
        </Alert>
    }

    </>
}