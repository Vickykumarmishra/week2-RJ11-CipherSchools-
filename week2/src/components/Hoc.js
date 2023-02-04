import React from 'react'

export default function Hoc(props) {
  return (
    <div style={{background:"yellow"}}>

        <h2>Higher order component of Simple component </h2>
      
  <props.c/>

    </div>
  )
}
