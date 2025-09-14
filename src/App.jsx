import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { decrimentA, decrimentB, incrementA, incrementB } from './redux/counterSlice';




function App() {

  const counterA=useSelector((state)=>state.counters.counterA);
  const counterB=useSelector((state)=>state.counters.counterB);
  const total = counterA+counterB;
  const dispatch=useDispatch();


  return (
    <div>
      <h1>Counter Apps</h1>
      <h1>Counter A : {counterA}</h1>
      <h1>Counter B : {counterB}</h1>
      <h1>Total : {total}</h1>

      <button onClick={()=>dispatch(incrementA())}>Incrimant A</button>
      <button onClick={()=>dispatch(decrimentA())}>decriment A</button>

  
      <button onClick={()=>dispatch(incrementB())}>Incrimant B</button>
      <button onClick={()=>dispatch(decrimentB())}>decriment B</button>



    </div>
  )
}

export default App

