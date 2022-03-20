import React from 'react'
import { useState } from 'react';
import { Display_count } from './Display_count';

export const Counter = () => {
    const [counter, setCounter] = useState(0);
    const plus = () =>{
        setCounter(counter+1);
    }

    const minus = () =>{
        setCounter(counter-1);
    }

    const double = () =>{
        setCounter(counter*2);
    }
  return (
    <div>
        <Display_count counter={counter}/>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={double}>*2</button>

    </div>
  )
}
