import React from 'react'

export default function Event_handling() {

  const imago=(a)=>{
    alert(a);
  }
  return (
    <div>
      {/**React events are written in camelCase syntax:

onClick instead of onclick.

React event handlers are written inside curly braces:

onClick={shoot}  instead of onClick="shoot()". */}

      <button onClick={()=>{alert('i am onClick')}}>event handling</button><hr></hr>
      <img src='my photo.jpg' onClick={()=>imago(10)}/>
       {/**To pass an argument to an event handler, use an arrow function. */}
{/**If you want to pass a parameter to the click event handler you need to make use of the arrow function or bind the function.
 *  If you pass the argument directly the onClick function would be called automatically even before pressing the button. */}
    </div>
  )
}
