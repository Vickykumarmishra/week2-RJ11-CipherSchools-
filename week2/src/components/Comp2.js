import React from 'react'
import { useState } from 'react'
//import { useEffect } from 'react';
export default function Comp2(Props){
    
    function updater(){
        // count=count+1;
        setCount(count+1)
    }
    //The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

    //if we want do change in any number, variable, array, object and string and we want to keep track of this change and want to show the updated value , then we need to use usestate.
    const [count,setCount]=useState(0);/*the first value, count, is our current state.The second value, setCount, is the function that is used to update our state.*/
    
    
    return (

<h>
salary of vicky is {Props.salary}<br></br>


Name of Ceo is {Props.data.name}<br></br>
Salary of Ceo of company is: {Props.data.salary}{/**data is an object  .i.e recieved by props , which is passed  in app.js file while using this component*/}
<br></br>
<p>Timer: {count}</p><br></br>
<button onClick={updater}>update_Count</button>
<hr></hr>


</h>
    )
}