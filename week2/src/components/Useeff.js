import React from 'react'
import { useState,useEffect } from 'react'
export default function Useeff() {

/*The term "mount" tells us that these components are loaded or rendered in the DOM. These are many top-level APIs and methods dealing with this. 
To make it simple, mounted means the component has been loaded to the DOM and unmounted means the components has been removed from the DOM.*/

//useeffect :jab hamara component banega(mount hoga) tab call hoga and jab state update hoga tab v chalega etc
/*The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data through APIs, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)*/

//useEffect(()=>{console.log('hi hi re hi e ladki')})


    function updating(){
        return setcount(count+1)
    }
 function gintiupda(){
     return setGinti(ginti+1);
 }
    const [count,setcount]=useState(0);
    const [ginti, setGinti]=useState(100);
    //useEffect(function(){console.log('useEffect called')})//Run for every render.UseEffect will run for component mount and for all the state changes
    //useEffect(function(){console.log('useEffect called')},[])//Run for only first render. i.e component mount
    //useEffect(function(){console.log('useEffect called')},[count])
    useEffect(function(){console.log('useEffect called')},[ginti])//here as a dependency a state 'ginti' has passed. so useeffect will Run on component mount and every time this dependency state updates
    //we can use more than one useefect , separately for both the different states also.

    //refer w3 school for useEffect

    /**What is side effect in useEffect?
The useEffect Hook allows you to perform side effects in your components.
 Some examples of side effects are: fetching data, directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional. */

  return (
    <div>
      <p id='tim'>secondTimer:{count}</p>

      <button onClick={updating}>secTimeUpdate</button>
      <br></br>
      <p>Ginti:{ginti}</p><button onClick={ gintiupda}>Ginti+</button>
      
    </div>
  )
}
