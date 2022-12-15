import React, { useEffect } from "react";
import { useState } from "react";
//React Hooks
          

        //useState
function Cars(){
    const [color,setcolor]=useState("red")
    
return<>
<p>I love {color} colors</p>

<button onClick={()=>setcolor('blue')}></button>
</>
}
//On line 9, we want to update our sta te

function Car(){
    const [car,setCar]=useState({
        brand:"Benz", 
        year:1934,
        color:"black"
    })
    //To updates a specific state
   const update =()=>{
    setCar(
      prev=>{
        return{
      ...prev,color:"blue" 
    }
})
   }
return<>
<div className="obj">
<p>{car.brand} is {car.color} and manufactured in {car.year}</p>
<button onClick={update}></button>
</div></>
}


        //useEffect
function Counter(){
    const [count,setcount]=useState(0)
    useEffect(()=>{
    setTimeout(()=>{
        setcount(count)
    },5000)
})
    
return<>
<p>{count}</p>

</>
}
export{Car,Counter}
export default Cars