import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'


export default function Useref() {

   

  //  useEffect(()=>{console.log('useffect in useRef')})
    // const [data ,setData]=useState('100')

     
    const reference=useRef('jai');

    const reference2=useRef('');
    
    const reference3=useRef(0);
    function foo(){

        console.log(reference);//this will return an object having current property in which input field will be its value
        //console.log(reference.current)//object.property:by doing this we get the value stored inside current property i.e input and we can do its manipulation

       // reference.current.focus();
         console.log(reference.current)//You can access the current value of that ref erence through the reference.current
       // reference.current.style.display='none';
    }

    function boo(){

        console.log(reference2)

        reference2.current.style.border='2px solid red'
    }

    function counter(){
        console.log(reference3)
        console.log(reference3.current)//print value stored inside current

        reference3.current=25;
        console.log(reference3.current)//updating the value stored inside reference3 object's property 'current'.
    }
//useRef has a property called "current" used to retrieve the value of the referenced object
   
//Refs in React are used to store a reference to a React element

  return (
    <div>

<input type='text'   ref={reference}/>

<button onClick={foo}>useref</button>

<img  src='logo192.png' ref={reference2} onClick={boo}/>

{/** Refs provide a way to access DOM nodes or React elements created in the render method.*/}
<hr></hr>
<button onClick={counter}>usref counter</button>
      
    </div>
  )
}
