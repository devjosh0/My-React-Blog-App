import React from "react";
import { useState } from "react";
export default function Btn(){
    const [ele,setle] = useState((value)=>{return <h4>{value}</h4>});
    return<div>
    <p>{ele}</p>
    <div className="con"></div>
    <button onClick={()=>{setle('display me')}}>click</button>
    </div>
 
 

 
}