import logo from './logo.svg';
import './App.css';
import Event_handling from './components/Event_handling';
import Props from './components/Props';
import Comp2 from './components/Comp2'
import Useeff from './components/Useeff';
import Useref from './components/Useref';
import { useState } from 'react';
import Hoc2 from './components/Hoc2';
import Hoc from './components/Hoc';
import SampleCompo from './components/SampleCompo';



function App() {

 let  details={
name:'abhimanyu' , age:'22',salary:'3000000'
  }
  return (
    <div className="App">
     

     <Props/>
       {/**passing variable and objects into comp2 using props */}
     <Comp2  salary='2000000'  data={details}/>{/*here we are passing the salary to the Comp2 functional component, this value will be recieved by props in comp2*/}
      <br></br><br></br>
     <Useeff/>

     <Useref/>

    <hr></hr>
    <Event_handling/>

    <Hoc2  cmp={Counter}/>
    <Hoc3 c={Counter}/> 
   <SampleCompo/>
    <Hoc c={SampleCompo}/>
    

    </div>
  );
}

function Counter(){
  const [timer,setTimer]=useState(0);

  function setting(){
    setTimer(timer+1)
  }
return(

  <div>

    <p>{timer}</p>
<button onClick={setting}>Timer</button>

  </div>
)


}


function Hoc3(props){   {/**A higher order component function accepts another function as an argument */}
{/**Here Hoc3 is a higher order component , accepting Hoc as an argument */}


  return(

    <>
    <div style={{background:'green',height:'10rem',width:"10rem"}}><props.c/>
    
    <h6>extra features can be added</h6>
      </div>
    
    </>
  )
}

export default App;
