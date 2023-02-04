import React from 'react'

export default function Hoc2(props) {

    {/**A higher order component function accepts another function as an argument */}
{/**Here Hoc3 is a higher order component , accepting Hoc as an argument */}

{/**using HOC  we can pass a component inside HOC function , and modifyb it's styling and  add some other features  and return a new compinent. */}

{/**HOCs does not work for refs as 'Refs' does not pass through as a parameter or argument. 
If you add a ref to an element in the HOC component, the ref refers to an instance of the outermost container component, not the wrapped component. */}
  return (
    <div>
      <p style={{background:'red',height:'10rem',width:"10rem"}}><props.cmp/></p>
    </div>
  )
}
