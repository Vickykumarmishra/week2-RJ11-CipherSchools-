import React, { useState } from 'react'

import Comp2 from './Comp2'
export default function Props(){


    let name='vicky kumar mishra'

    const [data,setData]=useState({name:'nano',companyName:'Tata',origin:'Bharat'})
//here default value of data is set to {name:'nano',companyName:'Tata',origin:'Bharat'} which is an object.

    return (
       <div>
<h1>my name is : { name }</h1> {/**here we are accessing name variable using curly braces */}

<h6>details of Car owned by vicky:{'carName: '+data.name+' ,'+'CompanyName: '+data.companyName +' ,'+'origin: ' + data.origin} </h6>
 {/*With JSX you can write expressions inside curly braces { }.The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result: */}

    

       </div>
    

    )

}
